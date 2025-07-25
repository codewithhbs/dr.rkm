import Treatments from '@/page_/treatments/Treatments';
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Best chiropractic :Dr. Rajneesh Kant',
  description: 'Generated by create next app',
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const newParams = await params;
  
  if (!newParams || !newParams.slug) {
    notFound(); 
  }

  return <Treatments slug={newParams.slug} />;
};