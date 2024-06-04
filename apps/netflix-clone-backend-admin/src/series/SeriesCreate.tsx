import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SeriesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="genre" source="genre" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <NumberInput step={1} label="seasons" source="seasons" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
