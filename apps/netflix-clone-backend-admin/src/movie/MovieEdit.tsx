import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const MovieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="genre" source="genre" />
        <NumberInput label="rating" source="rating" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
