"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Filter, Calendar, ChevronDown, TrendingUp, TrendingDown } from "lucide-react"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const dealsData = [
  {
    user: "Armin A.",
    avatar: "AA",
    totalDeals: 118,
    won: 99,
    lost: 19,
    pending: 12,
    totalValue: 209633,
    avgDealSize: 1776,
    conversionRate: 84,
    trend: "up",
  },
  {
    user: "Mikasa A.",
    avatar: "MA",
    totalDeals: 103,
    won: 92,
    lost: 11,
    pending: 8,
    totalValue: 156841,
    avgDealSize: 1523,
    conversionRate: 89,
    trend: "up",
  },
  {
    user: "Eren Y.",
    avatar: "EY",
    totalDeals: 84,
    won: 66,
    lost: 18,
    pending: 15,
    totalValue: 117115,
    avgDealSize: 1394,
    conversionRate: 79,
    trend: "down",
  },
  {
    user: "Levi A.",
    avatar: "LA",
    totalDeals: 142,
    won: 129,
    lost: 13,
    pending: 6,
    totalValue: 245890,
    avgDealSize: 1731,
    conversionRate: 91,
    trend: "up",
  },
]

const chartData = dealsData.map((user) => ({
  name: user.user,
  Won: user.won,
  Lost: user.lost,
  Pending: user.pending,
}))

export default function DealsByUserContent() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState("Last 90 days")
  const [sortBy, setSortBy] = useState<"deals" | "value" | "conversion">("deals")

  const sortedData = [...dealsData].sort((a, b) => {
    switch (sortBy) {
      case "deals":
        return b.totalDeals - a.totalDeals
      case "value":
        return b.totalValue - a.totalValue
      case "conversion":
        return b.conversionRate - a.conversionRate
      default:
        return 0
    }
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Deals by User</h1>
          <p className="text-sm text-muted-foreground mt-1">Analyze deal performance across your sales team</p>
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
            <div className="text-xs text-muted-foreground">Total Deals</div>
            <div className="text-3xl font-bold">{dealsData.reduce((sum, user) => sum + user.totalDeals, 0)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+12% from last period</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Won Deals</div>
            <div className="text-3xl font-bold text-green-600">
              {dealsData.reduce((sum, user) => sum + user.won, 0)}
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+8% from last period</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Total Value</div>
            <div className="text-3xl font-bold">
              ${(dealsData.reduce((sum, user) => sum + user.totalValue, 0) / 1000).toFixed(0)}k
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+15% from last period</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Avg Conversion</div>
            <div className="text-3xl font-bold">
              {Math.round(dealsData.reduce((sum, user) => sum + user.conversionRate, 0) / dealsData.length)}%
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+5% from last period</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Deal Distribution</h3>
          <div className="flex gap-2">
            <Button variant={sortBy === "deals" ? "default" : "outline"} size="sm" onClick={() => setSortBy("deals")}>
              By Deals
            </Button>
            <Button variant={sortBy === "value" ? "default" : "outline"} size="sm" onClick={() => setSortBy("value")}>
              By Value
            </Button>
            <Button
              variant={sortBy === "conversion" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("conversion")}
            >
              By Conversion
            </Button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Won" fill="#22c55e" />
            <Bar dataKey="Lost" fill="#ef4444" />
            <Bar dataKey="Pending" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="space-y-4">
        {sortedData.map((user) => (
          <Card
            key={user.user}
            className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
              selectedUser === user.user ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedUser(user.user)}
          >
            <div className="flex items-center gap-6">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="text-sm bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 grid grid-cols-7 gap-4">
                <div>
                  <div className="text-sm font-semibold mb-1">{user.user}</div>
                  <div className="text-xs text-muted-foreground">Sales Rep</div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">Total Deals</div>
                  <div className="text-lg font-bold">{user.totalDeals}</div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">Won</div>
                  <Badge className="bg-green-100 text-green-700">{user.won}</Badge>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">Lost</div>
                  <Badge className="bg-red-100 text-red-700">{user.lost}</Badge>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">Pending</div>
                  <Badge className="bg-orange-100 text-orange-700">{user.pending}</Badge>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">Total Value</div>
                  <div className="text-lg font-bold">${(user.totalValue / 1000).toFixed(0)}k</div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">Conversion</div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold">{user.conversionRate}%</span>
                    {user.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
