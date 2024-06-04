import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SeriesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="genre" source="genre" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <NumberInput step={1} label="seasons" source="seasons" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
