// pages/UserTickets.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LifeBuoy,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare
} from "lucide-react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../../config/apiConfig";

export default function UserTickets() {
  const { ticketRef } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const statusConfig = {
    Open: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      icon: AlertCircle
    },
    "Under Review": {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      icon: Clock
    },
    Resolved: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      icon: CheckCircle2
    }
  };

  function normalizeStatus(status) {
    switch (status?.toUpperCase()) {
      case "OPEN":
        return "Open";
      case "IN_PROGRESS":
        return "Under Review";
      case "RESOLVED":
        return "Resolved";
      default:
        return "Open";
    }
  }

  useEffect(() => {
    async function fetchTicket() {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/support-ticket/${ticketRef}`);
        const result = await res.json();
        if (result.success) setTicket(result.data);
        else toast.error("Ticket not found");
      } catch (err) {
        console.error(err);
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    }

    if (ticketRef) fetchTicket();
  }, [ticketRef]);

  if (loading)
    return (
      <div className="flex items-center justify-center py-32">
        <div className="animate-spin h-12 w-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full mx-auto" />
      </div>
    );

  if (!ticket)
    return (
      <div className="text-center py-16">
        <LifeBuoy className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p className="text-slate-500 text-lg">
          No ticket found for this reference.
        </p>
      </div>
    );

  const status = normalizeStatus(ticket.status);
  const statusStyle = statusConfig[status];
  const StatusIcon = statusStyle.icon;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-100 rounded-full">
          <LifeBuoy className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Ticket Details</h1>
          <p className="text-slate-500 mt-1">
            View the status and admin response for your support ticket
          </p>
        </div>
      </div>

      {/* Ticket Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              {ticket.subject}
            </h2>
            <p className="text-slate-600 leading-relaxed">{ticket.message}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {new Date(ticket.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
            </div>

            {ticket.adminReply && (
              <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-indigo-900 uppercase tracking-wide">
                    Admin Response
                  </span>
                </div>
                <p className="text-sm text-indigo-900 leading-relaxed">
                  {ticket.adminReply}
                </p>
              </div>
            )}
          </div>

          {/* Status badge */}
          <div className="flex items-start md:flex-col md:justify-center md:items-end gap-2">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
            >
              <StatusIcon className="w-3.5 h-3.5" />
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
