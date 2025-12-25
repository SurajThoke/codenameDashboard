"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  Calendar,
  ChevronDown,
  Filter,
  Download,
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

const monthlyData = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  revenue: 400000 + Math.random() * 200000,
  deals: 80 + Math.random() * 40,
  leads: 200 + Math.random() * 100,
}))

const sourceData = [
  { name: "Direct", value: 35, color: "#ef4444" },
  { name: "Referral", value: 28, color: "#f59e0b" },
  { name: "Social Media", value: 22, color: "#3b82f6" },
  { name: "Email", value: 15, color: "#8b5cf6" },
]

const performanceMetrics = [
  { metric: "Revenue Growth", value: "+23.5%", trend: "up", color: "text-green-600" },
  { metric: "Customer Acquisition", value: "+18.2%", trend: "up", color: "text-green-600" },
  { metric: "Churn Rate", value: "-5.1%", trend: "down", color: "text-green-600" },
  { metric: "Avg Deal Size", value: "+12.8%", trend: "up", color: "text-green-600" },
  { metric: "Sales Cycle", value: "-8.3%", trend: "down", color: "text-green-600" },
  { metric: "Win Rate", value: "+6.7%", trend: "up", color: "text-green-600" },
]

export default function AnalyticsContent() {
  const [timeRange, setTimeRange] = useState("Last 12 months")
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Analytics Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Comprehensive insights into your sales performance</p>
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
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Total Revenue</div>
              <div className="text-2xl font-bold">$6.2M</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+23.5%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Total Customers</div>
              <div className="text-2xl font-bold">1,247</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+18.2%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Deals Closed</div>
              <div className="text-2xl font-bold">386</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+15.7%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Conversion Rate</div>
              <div className="text-2xl font-bold">28.4%</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+6.7%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2 p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue & Deals Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#ef4444" strokeWidth={3} name="Revenue" />
              <Line yAxisId="right" type="monotone" dataKey="deals" stroke="#3b82f6" strokeWidth={3} name="Deals" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Lead Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={sourceData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {sourceData.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                  <span>{source.name}</span>
                </div>
                <span className="font-semibold">{source.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-3 gap-4">
          {performanceMetrics.map((metric) => (
            <button
              key={metric.metric}
              onClick={() => setSelectedMetric(metric.metric)}
              className={`p-4 rounded-lg border-2 transition-all hover:shadow-lg ${
                selectedMetric === metric.metric ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">{metric.metric}</div>
                <div className="flex items-center justify-between">
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-green-500" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="leads" fill="#8b5cf6" name="Leads" />
            <Bar dataKey="deals" fill="#ef4444" name="Deals" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
