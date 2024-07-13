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

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, 5)

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
            <Input label="Name" labelPlacement='outside' placeholder='Name' name="name" />
            <Textarea label="Description" labelPlacement='outside' placeholder='Describe your topic' name="description" />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}