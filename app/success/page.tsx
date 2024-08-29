"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionDetails, setSessionDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      const fetchSession = async () => {
        try {
          const res = await fetch(`/api/session?session_id=${sessionId}`);
          const data = await res.json();
          setSessionDetails(data);
        } catch (error) {
          console.error("Error fetching session details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSession();
    }
  }, [sessionId]);

  if (loading) return <div>Loading...</div>;

  if (!sessionDetails) return <div>Session not found</div>;
  console.log(sessionDetails);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-100 to-blue-200 p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Thank You for Your Donation!
        </h1>
        <p className="text-center text-gray-600 mb-8 leading-relaxed">
          Here are the details of your donation:
        </p>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Name:</strong> {sessionDetails.customer_details.name}
          </p>
          <p>
            <strong>Email:</strong> {sessionDetails.customer_details.email}
          </p>
          <p>
            <strong>Amount:</strong> {sessionDetails.amount_total / 100} EUR
          </p>
          <p>
            <strong>Status:</strong> {sessionDetails.payment_status}
          </p>
          <p>
            <strong>Receipt:</strong>{" "}
            <a
              href={sessionDetails.receipt_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline"
            >
              View Receipt
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
