
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Taable()
{
      return (
            <Table>
                  <TableHeader>
                        <TableRow>
                              <TableHead className="w-[100px]">Invoice</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Method</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                  </TableHeader>
                  <TableBody>
                        <TableRow>
                              <TableCell className="font-medium">INV001</TableCell>
                              <TableCell>Paid</TableCell>
                              <TableCell>$250.00</TableCell>
                              <TableCell className="text-right">Credit Card</TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell className="font-medium">INV002</TableCell>
                              <TableCell>Pending</TableCell>
                              <TableCell>$150.00</TableCell>
                              <TableCell className="text-right">PayPal</TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell className="font-medium">INV003</TableCell>
                              <TableCell>Unpaid</TableCell>
                              <TableCell>$350.00</TableCell>
                              <TableCell className="text-right">Bank Transfer</TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell className="font-medium">INV004</TableCell>
                              <TableCell>Paid</TableCell>
                              <TableCell>$450.00</TableCell>
                              <TableCell className="text-right">Credit Card</TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell className="font-medium">INV005</TableCell>
                              <TableCell>Paid</TableCell>
                              <TableCell>$550.00</TableCell>
                              <TableCell className="text-right">PayPal</TableCell>
                        </TableRow>
                  </TableBody>
            </Table>
      )
}

