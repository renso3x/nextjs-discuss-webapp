'use client'

import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react"
import { useFormState } from "react-dom"
import * as actions from '@/actions'
import FormButton from "../common/form-button"
import { FormAuthError } from "../common/form-auth-error"

export default function PostCreateForm() {
  const [formState, action] = useFormState(actions.createPost, {
    errors: {}
  })

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
            />
            {formState.errors._form ? <FormAuthError>{formState.errors._form?.join(', ')}</FormAuthError> : null}
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}