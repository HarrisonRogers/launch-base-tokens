import { address } from '@/lib/types/contracts';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import Link from 'next/link';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '../ui/pagination';

type PaginatedTokensProps = {
  tokens: address[] | undefined;
};

const ITEMS_PER_PAGE = 5;

function PaginatedTokens({ tokens }: PaginatedTokensProps) {
  const [currentPage, setCurrentPage] = useState(1);

  if (tokens === undefined) {
    return <div className="text-center">Loading tokens...</div>;
  }

  if (tokens.length === 0) {
    return (
      <div className="text-center mt-10">
        <span>No tokens found</span>{' '}
        <Link href="/" className="underline hover:no-underline">
          Deploy a token here
        </Link>
      </div>
    );
  }

  // Calculate total pages
  const totalPages = Math.ceil(tokens.length / ITEMS_PER_PAGE);

  // Get current page items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageTokens = tokens
    ? [...tokens].reverse().slice(startIndex, endIndex)
    : [];

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      <Table className="w-2/3 mx-auto mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Token Contract Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPageTokens.map((token: `0x${string}`) => (
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
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
            {(() => {
              const pages = [];

              // Always show first page
              pages.push(
                <PaginationItem key={1}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(1)}
                    isActive={currentPage === 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              );

              // Add ellipsis after first page if needed
              if (currentPage > 4) {
                pages.push(
                  <PaginationItem key="ellipsis1">
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              // Show pages around current page
              for (
                let i = Math.max(2, currentPage - 1);
                i <= Math.min(totalPages - 1, currentPage + 1);
                i++
              ) {
                pages.push(
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(i)}
                      isActive={currentPage === i}
                    >
                      {i}
                    </PaginationLink>
                  </PaginationItem>
                );
              }

              // Add ellipsis before last page if needed
              if (currentPage < totalPages - 3) {
                pages.push(
                  <PaginationItem key="ellipsis2">
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              // Always show last page if there is more than one page
              if (totalPages > 1) {
                pages.push(
                  <PaginationItem key={totalPages}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(totalPages)}
                      isActive={currentPage === totalPages}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                );
              }

              return pages;
            })()}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

export default PaginatedTokens;
