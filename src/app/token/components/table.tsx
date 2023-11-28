import Table from "@/ui/html/table";

export function TableDemo() {
  return (
    <div className="max-h-80 overflow-y-auto">
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Header>Unit Price</Table.Header>
            <Table.Header>USD Unit Price</Table.Header>
            <Table.Header>Quantity</Table.Header>
            <Table.Header>Date</Table.Header>
            <Table.Header>From</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {Array.from({ length: 6 }).map((_, i) => (
            <Table.Row key={i}>
              <Table.Cell>0.002 ETH</Table.Cell>
              <Table.Cell>$4.02</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>20h ago</Table.Cell>
              <Table.Cell>Columpio Labs</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
