'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import Link from 'next/link';
import { useDeployedTokens } from '@/hooks/useDeployedTokens';
function DeployedTokens() {
  const tokens = useDeployedTokens();
  const shortenedTokens = tokens ? [...tokens].reverse().slice(0, 5) : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployed Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token Contract Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shortenedTokens?.length === 0 && (
              <TableRow>
                <TableCell colSpan={2}>Loading Tokens...</TableCell>
              </TableRow>
            )}
            {shortenedTokens === undefined && (
              <TableRow>
                <TableCell colSpan={2}>No tokens found</TableCell>
              </TableRow>
            )}
            {shortenedTokens?.map((token: `0x${string}`) => (
              <TableRow key={token}>
                <TableCell>
                  <Link
                    href={`https://base-sepolia.blockscout.com/address/${token}`}
                    className="underline hover:no-underline underline-offset-2"
                    target="_blank"
                  >
                    {token}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
            {shortenedTokens?.length > 0 && (
              <TableRow>
                <TableCell>
                  <Link
                    href="/all-tokens"
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

export default DeployedTokens;
