import React from 'react'
import type { Metadata } from "next";
import PatientDashboard from '@/page_/profile/profile';

export const metadata: Metadata = {
  title: "Profile:Dr. Rajneesh Kant",
  description: "Generated by create next app",
};

const Page = () => {
  return <PatientDashboard/>
}

export default Page