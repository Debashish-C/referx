"use client"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@heroui/react";

export default function App() {
  return (
    <div className="container mx-auto p-4">

    <Table removeWrapper aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Product Name</TableColumn>
        <TableColumn>Referer Email</TableColumn>
        <TableColumn>Referee Email</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>hdsg@gmail.com</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>234@gmail.com</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>123@gmail.com</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>123@gmail.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
}
