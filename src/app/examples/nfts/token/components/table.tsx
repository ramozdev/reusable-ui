import Table from "@/ui/html/table";

export function TableDemo() {
  return (
    <div className="max-h-80 overflow-y-auto rounded-md border border-neutral-200 dark:border-neutral-800">
      <Table.Root>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Unit Price</Table.Th>
            <Table.Th>USD Unit Price</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>From</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array.from({ length: 6 }).map((_, i) => (
            <Table.Tr key={i}>
              <Table.Td>0.002 ETH</Table.Td>
              <Table.Td>$4.02</Table.Td>
              <Table.Td>1</Table.Td>
              <Table.Td>20h ago</Table.Td>
              <Table.Td>Columpio Labs</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table.Root>
    </div>
  );
}
