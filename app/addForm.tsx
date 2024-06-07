import { Flex, SecondaryButton, PrimaryButton, Text, TextArea, TextInput } from "@workday/canvas-kit-react";
import {FormField} from '@workday/canvas-kit-preview-react';
import React from "react";

export default function AddForm() {
    const [car, setCar] = React.useState('');
    const [value, setValue] = React.useState('');

    const handleCarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCar(event.target.value);
    };

    const handleKmChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
      };

    return (
    //   <form>
        <Flex gap={'s'} justifyContent="right" flexDirection="column">
            <FormField isRequired>
                <FormField.Label>Car</FormField.Label>
                <FormField.Input as={TextInput} onChange={handleCarChange} value={car} />
            </FormField>

            <FormField isRequired>
                <FormField.Label>km</FormField.Label>
                <FormField.Input rows={5} as={TextArea} onChange={handleKmChange} value={value} />
            </FormField>

          <SecondaryButton>Cancel</SecondaryButton>
          <PrimaryButton>Submit</PrimaryButton>
        </Flex>
    //   </form>
    );
  }