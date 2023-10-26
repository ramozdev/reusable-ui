import Table from "@/ui/html/table";

export function TableDemo() {
  return (
    <Table.Root>
      <Table.Caption>
        This table has a caption, a header, a body, and a footer.
      </Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header>Header cell 1</Table.Header>
          <Table.Header>Header cell 2</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Body cell 1</Table.Cell>
          <Table.Cell>Body cell 2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Body cell 1</Table.Cell>
          <Table.Cell>Body cell 2</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>Footer cell 1</Table.Cell>
          <Table.Cell>Footer cell 2</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table.Root>
  );
}
