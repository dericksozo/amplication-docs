import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";

export const WorkflowsOnEventTypeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowsOnEventTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Workflow"
          source="workflow.id"
          reference="Workflow"
        >
          <TextField source={WORKFLOW_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
