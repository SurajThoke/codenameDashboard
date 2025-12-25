"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Plus,
  Star,
  Download,
  Share2,
  Shuffle,
  ArrowUp,
  Filter,
  ChevronRight,
  X,
  TrendingUp,
} from "lucide-react"
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"

// Sample data
const salesData = [
  {
    name: "Armin A.",
    avatar: "AA",
    sales: 209633,
    percentage: 39.63,
    deals: 118,
    kpi: 0.84,
    wl: "31%",
    conversion: 12,
    trend: "up",
  },
  {
    name: "Mikasa A.",
    avatar: "MA",
    sales: 156841,
    percentage: 29.65,
    deals: 103,
    kpi: 0.89,
    wl: "39%",
    conversion: 21,
    trend: "up",
  },
  {
    name: "Eren Y.",
    avatar: "EY",
    sales: 117115,
    percentage: 22.14,
    deals: 84,
    kpi: 0.79,
    wl: "32%",
    conversion: 8,
    trend: "down",
  },
]

const platformData = [
  { platform: "Dribbble", revenue: 227459, percentage: 43, color: "#ea4c89" },
  { platform: "Instagram", revenue: 142823, percentage: 27, color: "#e1306c" },
  { platform: "Behance", revenue: 89935, percentage: 17, color: "#0057ff" },
  { platform: "Google", revenue: 37082, percentage: 7, color: "#4285f4" },
]

const timeSeriesData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  value1: 50 + Math.random() * 20,
  value2: 40 + Math.random() * 15,
  value3: 35 + Math.random() * 10,
}))

export default function DashboardContent() {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [timeframe, setTimeframe] = useState("Sep 1 - Nov 30, 2023")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")

  return (
    <div className="p-6 space-y-6">
      {/* Title Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-1">New report</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="w-2 h-2 bg-foreground rounded-full" />
            <span className="text-sm">Timeframe</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-lg hover:bg-secondary transition-colors">
            <span className="text-sm">{timeframe}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Team Members Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="hover:bg-secondary rounded-full p-1 transition-colors">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex items-center -space-x-2">
            {salesData.map((person) => (
              <button
                key={person.name}
                onClick={() => setSelectedPerson(person.name)}
                className="transition-transform hover:scale-110 hover:z-10"
              >
                <Avatar className="w-8 h-8 border-2 border-background cursor-pointer">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                    {person.avatar}
                  </AvatarFallback>
                </Avatar>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setViewMode(viewMode === "table" ? "grid" : "table")}>
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {showFilters && (
        <Card className="p-4 bg-secondary/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters</span>
              </div>
              <div className="flex items-center gap-2">
                {["All time", "Last 30 days", "Last 90 days", "Custom"].map((filter) => (
                  <Button
                    key={filter}
                    variant={timeframe.includes("30") && filter === "Last 90 days" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setTimeframe(
                        filter === "Last 30 days"
                          ? "Sep 1 - Oct 1, 2023"
                          : filter === "Last 90 days"
                            ? "Sep 1 - Nov 30, 2023"
                            : "Custom Range",
                      )
                    }}
                    className="text-xs"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,1fr] gap-4">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Revenue</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold">$528,976</span>
                <span className="text-2xl text-muted-foreground">.82</span>
                <Badge className="bg-primary text-primary-foreground text-xs">-7.9%</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                  $27,335.04
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">vs prev. $501,641.73 Jun 1 - Aug 31, 2023</p>
            </div>
            <div className="flex items-center gap-6">
              {salesData.map((person) => (
                <button
                  key={person.name}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPerson(person.name)
                  }}
                  className="flex items-center gap-2 hover:bg-secondary rounded-lg p-1 transition-colors"
                >
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-[10px] bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                      {person.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold">${(person.sales / 1000).toFixed(0)}k</div>
                    <div className="text-xs text-muted-foreground">{person.percentage}%</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Top sales</span>
            <button>
              <Star className="w-3 h-3 text-muted-foreground hover:text-yellow-500 transition-colors" />
            </button>
          </div>
          <div className="text-2xl font-bold mb-1">72</div>
          <div className="flex items-center gap-2">
            <Avatar className="w-5 h-5">
              <AvatarFallback className="text-[10px] bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                MA
              </AvatarFallback>
            </Avatar>
            <span className="text-xs">Mikasa</span>
            <ChevronRight className="w-3 h-3 ml-auto text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-4 bg-foreground text-background hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs opacity-80">Best deal</span>
            <button>
              <Star className="w-3 h-3 hover:text-yellow-500 transition-colors" />
            </button>
          </div>
          <div className="text-sm font-semibold mb-1">Rolf Inc.</div>
          <div className="flex items-center justify-between">
            <span className="text-xs opacity-80">Deal value</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Deals</span>
              <Badge variant="secondary" className="text-[10px]">
                429
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Value</span>
              <Badge className="bg-primary text-primary-foreground text-[10px]">$286k</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Win rate</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs font-semibold">67%</span>
                <span className="text-xs text-green-500">+1.2%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Sales Performance Table */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-6 flex-1">
              <span className="text-xs font-semibold text-muted-foreground w-32">Sales</span>
              <span className="text-xs font-semibold text-muted-foreground w-24">Revenue</span>
              <span className="text-xs font-semibold text-muted-foreground w-16">Leads</span>
              <span className="text-xs font-semibold text-muted-foreground w-16">KPI</span>
              <span className="text-xs font-semibold text-muted-foreground w-16">W/L</span>
            </div>
            <button>
              <Filter className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </button>
          </div>

          {salesData.map((person) => (
            <button
              key={person.name}
              onClick={() => setSelectedPerson(person.name)}
              className="w-full flex items-center gap-6 py-3 px-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3 w-32">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                    {person.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{person.name}</span>
              </div>
              <div className="w-24">
                <div className="text-sm font-semibold">${person.sales.toLocaleString()}</div>
              </div>
              <div className="w-16">
                <Badge className="bg-foreground text-background text-xs">{person.deals}</Badge>
              </div>
              <div className="w-16 text-sm">{person.kpi}</div>
              <div className="w-16 text-sm">{person.wl}</div>
              <div className="ml-auto">
                <Badge
                  variant="secondary"
                  className={`text-xs ${person.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {person.conversion}
                </Badge>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Platform Performance */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-sm font-semibold mb-4">Work with platforms</h3>
          <div className="space-y-3">
            {platformData.map((platform) => (
              <button
                key={platform.platform}
                onClick={() => setSelectedPlatform(platform.platform)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                  selectedPlatform === platform.platform ? "bg-secondary ring-2 ring-ring" : "hover:bg-secondary"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: platform.color + "20" }}
                >
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: platform.color }} />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-semibold">{platform.platform}</div>
                  <div className="text-xs text-muted-foreground">{platform.percentage}%</div>
                </div>
                <div className="text-sm font-semibold">${platform.revenue.toLocaleString()}</div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold mb-4">Sales dynamic</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={timeSeriesData}>
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#ef4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="value2" stroke="#3b82f6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="value3" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
            <span>W 5</span>
            <span>W 7</span>
            <span>W 9</span>
            <span>W 11</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
