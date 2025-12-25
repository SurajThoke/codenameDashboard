"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Filter, Calendar, ChevronDown, TrendingUp } from "lucide-react"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts"

const durationData = [
  { stage: "Prospecting", avgDays: 7, deals: 45, color: "#3b82f6" },
  { stage: "Qualification", avgDays: 12, deals: 38, color: "#8b5cf6" },
  { stage: "Proposal", avgDays: 18, deals: 32, color: "#ec4899" },
  { stage: "Negotiation", avgDays: 21, deals: 28, color: "#f59e0b" },
  { stage: "Closing", avgDays: 9, deals: 24, color: "#22c55e" },
]

const trendData = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  duration: 45 + Math.random() * 20,
}))

const recentDeals = [
  { name: "Acme Corp", duration: 34, stage: "Closed Won", value: 45000, status: "fast" },
  { name: "TechStart Inc", duration: 67, stage: "Closed Won", value: 78000, status: "slow" },
  { name: "Global Solutions", duration: 42, stage: "Closed Won", value: 56000, status: "average" },
  { name: "Innovation Labs", duration: 28, stage: "Closed Won", value: 34000, status: "fast" },
  { name: "DataFlow Systems", duration: 89, stage: "Closed Won", value: 123000, status: "slow" },
  { name: "CloudNet", duration: 51, stage: "Closed Won", value: 67000, status: "average" },
]

export default function DealDurationContent() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState("Last 12 months")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "fast":
        return "bg-green-100 text-green-700"
      case "average":
        return "bg-blue-100 text-blue-700"
      case "slow":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Deal Duration Analysis</h1>
          <p className="text-sm text-muted-foreground mt-1">Track and optimize your sales cycle timeline</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            {timeRange}
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Avg Deal Duration</div>
            <div className="text-3xl font-bold">67 days</div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>-8% faster than last period</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Fastest Deal</div>
            <div className="text-3xl font-bold text-green-600">18 days</div>
            <div className="text-xs text-muted-foreground">Innovation Labs</div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Longest Deal</div>
            <div className="text-3xl font-bold text-orange-600">142 days</div>
            <div className="text-xs text-muted-foreground">Enterprise Corp</div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Total Stages</div>
            <div className="text-3xl font-bold">{durationData.length}</div>
            <div className="text-xs text-muted-foreground">Pipeline stages</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Duration by Stage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={durationData}>
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgDays" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Duration Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="duration" stroke="#ef4444" strokeWidth={3} dot={{ fill: "#ef4444" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Stage Breakdown</h3>
        <div className="grid grid-cols-5 gap-4">
          {durationData.map((stage) => (
            <button
              key={stage.stage}
              onClick={() => setSelectedStage(stage.stage)}
              className={`p-4 rounded-lg border-2 transition-all hover:shadow-lg ${
                selectedStage === stage.stage ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className="space-y-2">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto"
                  style={{ backgroundColor: stage.color + "20" }}
                >
                  <Clock className="w-6 h-6" style={{ color: stage.color }} />
                </div>
                <div className="text-sm font-semibold text-center">{stage.stage}</div>
                <div className="text-2xl font-bold text-center">{stage.avgDays}d</div>
                <div className="text-xs text-muted-foreground text-center">{stage.deals} deals</div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Closed Deals</h3>
        <div className="space-y-3">
          {recentDeals.map((deal, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                <div>
                  <div className="font-semibold">{deal.name}</div>
                  <div className="text-xs text-muted-foreground">{deal.stage}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Duration</div>
                  <div className="font-semibold">{deal.duration} days</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Value</div>
                  <div className="font-semibold">${deal.value.toLocaleString()}</div>
                </div>
                <Badge className={getStatusColor(deal.status)}>
                  {deal.status === "fast" ? "Fast" : deal.status === "average" ? "Average" : "Slow"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
