'use server'

import { auth } from '@/auth'
import { db } from '@/db'
import { routePaths } from '@/routePath'
import { SelectSection } from '@nextui-org/react'
import type { Post } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { title } from 'process'
import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10)
})

interface CreatePostFormState {
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[]
  }
}

export async function createPost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {

  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content')
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const session = await auth()
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You should be login to perform this action.']
      }
    }
  }

  return {
    errors: {}
  }
}