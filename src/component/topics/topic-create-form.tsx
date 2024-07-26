'use client'

import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/react';
import * as actions from '@/actions'
import { useFormState } from 'react-dom';
import FormButton from '../common/form-button';
import { FormAuthError } from '../common/form-auth-error';

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {}
  })

  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color="primary">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input label="Name" labelPlacement='outside' placeholder='Name' name="name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')} />
            <Textarea label="Description" labelPlacement='outside' placeholder='Describe your topic' name="description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')} />

            {formState.errors._form?.join(', ') ?
              <FormAuthError>{formState.errors._form?.join(', ')}</FormAuthError> : null
            }
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}