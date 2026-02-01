import React from 'react';
import { TableCell } from './ui/table';
import { TableBody } from './ui/table';
import { TableHead } from './ui/table';
import { TableRow } from './ui/table';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Table, TableHeader } from './ui/table';
import Link from 'next/link';
import { address } from '@/lib/types/contracts';

type TokenListProps = {
  title: string;
  tokens: address[];
  deployed?: boolean;
};

function TokenList({ title, tokens, deployed = true }: TokenListProps) {
  const renderTokenRows = () => {
    if (tokens?.length === 0) {
      return (
        <TableRow>
          <TableCell className="text-center">No Tokens Found</TableCell>
        </TableRow>
      );
    }

    if (tokens === undefined) {
      return (
        <TableRow>
          <TableCell className="text-center">Loading...</TableCell>
        </TableRow>
      );
    }

    return tokens.map((token: address) => (
      <TableRow key={token}>
        <TableCell>
          <Link
            href={`https://base-sepolia.blockscout.com/address/${token}`}
            className="underline hover:no-underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {token}
          </Link>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token Contract Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderTokenRows()}
            {tokens?.length > 0 && (
              <TableRow>
                <TableCell>
                  <Link
                    href={deployed ? '/all-tokens' : '/your-tokens'}
                    className="underline hover:no-underline underline-offset-2 text-blue-500"
                  >
                    View All
                  </Link>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default TokenList;
