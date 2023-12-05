import Table from "@/ui/html/table";

export function TableDemo() {
  return (
    <Table.Root>
      <Table.Caption>
        This table has a caption, a header, a body, and a footer.
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Header cell 1</Table.Th>
          <Table.Th>Header cell 2</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Body cell 1</Table.Td>
          <Table.Td>Body cell 2</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Body cell 1</Table.Td>
          <Table.Td>Body cell 2</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tfoot>
        <Table.Tr>
          <Table.Td>Footer cell 1</Table.Td>
          <Table.Td>Footer cell 2</Table.Td>
        </Table.Tr>
      </Table.Tfoot>
    </Table.Root>
  );
}
