"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Target, TrendingUp, Calendar, Users, DollarSign } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"

const goals = [
  {
    id: 1,
    title: "Q4 Revenue Target",
    target: 2000000,
    current: 1450000,
    deadline: "Dec 31, 2023",
    status: "on-track",
    team: ["AA", "MA", "EY"],
  },
  {
    id: 2,
    title: "New Client Acquisition",
    target: 50,
    current: 38,
    deadline: "Nov 30, 2023",
    status: "at-risk",
    team: ["MA", "LA"],
  },
  {
    id: 3,
    title: "Product Launch Sales",
    target: 500000,
    current: 520000,
    deadline: "Oct 31, 2023",
    status: "achieved",
    team: ["AA", "EY", "HR"],
  },
  {
    id: 4,
    title: "Customer Retention Rate",
    target: 95,
    current: 92,
    deadline: "Dec 15, 2023",
    status: "on-track",
    team: ["LA", "MA"],
  },
]

const progressData = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  value: 20 + i * 6 + Math.random() * 10,
}))

export default function GoalsContent() {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "achieved":
        return "bg-green-100 text-green-700 border-green-200"
      case "on-track":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "at-risk":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "achieved":
        return "Achieved"
      case "on-track":
        return "On Track"
      case "at-risk":
        return "At Risk"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Goals & Targets</h1>
          <p className="text-sm text-muted-foreground mt-1">Track and manage your team's goals and objectives</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Goal
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Total Goals</div>
              <div className="text-2xl font-bold">{goals.length}</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Achieved</div>
              <div className="text-2xl font-bold">{goals.filter((g) => g.status === "achieved").length}</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Revenue Progress</div>
              <div className="text-2xl font-bold">73%</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Active Teams</div>
              <div className="text-2xl font-bold">5</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {goals.map((goal) => (
            <Card
              key={goal.id}
              className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
                selectedGoal === goal.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{goal.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Due: {goal.deadline}
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(goal.status)} border`}>{getStatusLabel(goal.status)}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">
                      {typeof goal.current === "number" && typeof goal.target === "number"
                        ? `${Math.round((goal.current / goal.target) * 100)}%`
                        : "N/A"}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        goal.status === "achieved"
                          ? "bg-green-500"
                          : goal.status === "on-track"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                      }`}
                      style={{
                        width: `${Math.min((goal.current / goal.target) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>
                      Current:{" "}
                      {typeof goal.current === "number"
                        ? goal.current > 1000
                          ? `$${(goal.current / 1000).toFixed(0)}k`
                          : goal.current
                        : "N/A"}
                    </span>
                    <span>
                      Target:{" "}
                      {typeof goal.target === "number"
                        ? goal.target > 1000
                          ? `$${(goal.target / 1000).toFixed(0)}k`
                          : goal.target
                        : "N/A"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div className="flex items-center -space-x-2">
                    {goal.team.map((member, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white text-[10px] flex items-center justify-center border-2 border-background"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Progress Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} dot={{ fill: "#ef4444", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overall Completion</span>
              <span className="font-semibold">67%</span>
            </div>
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: "67%" }} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
