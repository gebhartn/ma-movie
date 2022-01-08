import * as React from 'react';
import { InputGroup, Input, Button, InputRightElement } from '@chakra-ui/react';

const BUTTON_SIZE = '4.5rem';
export const Lookup: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <InputGroup size="lg">
      <Input pr={BUTTON_SIZE} type="text" placeholder="Enter movie name" />
      <InputRightElement width={BUTTON_SIZE}>
        <Button h="1.75rem" size="lg">
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
