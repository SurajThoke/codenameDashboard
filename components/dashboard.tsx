"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Search,
  Plus,
  Star,
  Clock,
  LayoutDashboard,
  Users,
  Target,
  TrendingUp,
  Settings,
  Menu,
  Download,
  Share2,
  Shuffle,
  ArrowUp,
  MoreVertical,
  Filter,
  ChevronRight,
  Eye,
  X,
} from "lucide-react"
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"

// Sample data
const revenueData = [
  { month: "Jan", value: 65000 },
  { month: "Feb", value: 59000 },
  { month: "Mar", value: 80000 },
  { month: "Apr", value: 81000 },
  { month: "May", value: 56000 },
  { month: "Jun", value: 85000 },
]

const platformData = [
  { platform: "Dribbble", revenue: 227459, percentage: 43, color: "#ea4c89" },
  { platform: "Instagram", revenue: 142823, percentage: 27, color: "#e1306c" },
  { platform: "Behance", revenue: 89935, percentage: 17, color: "#0057ff" },
  { platform: "Google", revenue: 37082, percentage: 7, color: "#4285f4" },
]

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

const timeSeriesData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  value1: 50 + Math.random() * 20,
  value2: 40 + Math.random() * 15,
  value3: 35 + Math.random() * 10,
}))

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [timeframe, setTimeframe] = useState("Sep 1 - Nov 30, 2023")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background font-bold text-sm">
            C
          </div>
          <div className="flex items-center gap-2 flex-1">
            <span className="font-semibold text-sm">Codename.com</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <button
            onClick={() => console.log("[v0] Starred clicked")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Star className="w-4 h-4" />
            Starred
          </button>
          <button
            onClick={() => console.log("[v0] Recent clicked")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Clock className="w-4 h-4" />
            Recent
          </button>
          <button
            onClick={() => console.log("[v0] Sales list clicked")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Users className="w-4 h-4" />
            Sales list
          </button>
          <button
            onClick={() => console.log("[v0] Goals clicked")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Target className="w-4 h-4" />
            Goals
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-primary/10 text-primary rounded-lg font-medium">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
            <Plus className="w-3 h-3 ml-auto" />
          </button>

          <div className="pt-4">
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">WORKSPACES</div>
            <button
              onClick={() => console.log("[v0] Codename workspace clicked")}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <span className="text-xs">Codename</span>
            </button>
            <button
              onClick={() => console.log("[v0] Shared with me clicked")}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <span className="text-xs">Shared with me</span>
              <ChevronDown className="w-3 h-3 ml-auto" />
            </button>
          </div>

          <div className="pt-4">
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground flex items-center justify-between">
              <span>REPORTS</span>
              <button
                onClick={() => console.log("[v0] Add report clicked")}
                className="hover:bg-secondary rounded p-0.5 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            <button
              onClick={() => console.log("[v0] Share with me clicked")}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <span className="text-xs">Share with me</span>
            </button>
            <button
              onClick={() => console.log("[v0] My reports clicked")}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <span className="text-xs">My reports</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg font-medium">
              <span className="text-xs">New report</span>
              <Badge variant="secondary" className="ml-auto bg-white/20 text-white text-[10px] h-4 px-1">
                7
              </Badge>
            </button>
            <button
              onClick={() => console.log("[v0] Analytics clicked")}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <span className="text-xs">Analytics</span>
            </button>
          </div>
        </nav>

        <div className="p-3 border-t border-border">
          <button
            onClick={() => console.log("[v0] Settings clicked")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder='Try searching "insights"'
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    console.log("[v0] Search query:", e.target.value)
                  }}
                  className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setSidebarOpen(!sidebarOpen)
                  console.log("[v0] Menu toggled")
                }}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <button onClick={() => console.log("[v0] Profile clicked")}>
                <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-ring transition-all">
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-pink-500 text-white text-xs">
                    ST
                  </AvatarFallback>
                </Avatar>
              </button>
              <Button
                size="icon"
                className="rounded-full bg-primary hover:bg-primary/90"
                onClick={() => console.log("[v0] Add new clicked")}
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="px-6 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => console.log("[v0] Add team member")}
                className="hover:bg-secondary rounded-full p-1 transition-colors"
              >
                <Plus className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="flex items-center -space-x-2">
                {salesData.map((person) => (
                  <button
                    key={person.name}
                    onClick={() => {
                      setSelectedPerson(person.name)
                      console.log("[v0] Selected person:", person.name)
                    }}
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setViewMode(viewMode === "table" ? "grid" : "table")
                  console.log("[v0] View mode:", viewMode === "table" ? "grid" : "table")
                }}
              >
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => console.log("[v0] Download report")}>
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => console.log("[v0] Share report")}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Title Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-1">New report</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowFilters(!showFilters)
                  console.log("[v0] Filters toggled")
                }}
                className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-2 h-2 bg-foreground rounded-full" />
                <span className="text-sm">Timeframe</span>
              </button>
              <button
                onClick={() => console.log("[v0] Date picker clicked")}
                className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <span className="text-sm">{timeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
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
                          console.log("[v0] Timeframe changed:", filter)
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
            <Card
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => console.log("[v0] Revenue card clicked")}
            >
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
                        console.log("[v0] Person selected:", person.name)
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

            <Card
              className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => console.log("[v0] Top sales card clicked")}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Top sales</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log("[v0] Star clicked")
                  }}
                >
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

            <Card
              className="p-4 bg-foreground text-background hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => console.log("[v0] Best deal card clicked")}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs opacity-80">Best deal</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log("[v0] Star best deal")
                  }}
                >
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

            <Card
              className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => console.log("[v0] Stats card clicked")}
            >
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Deals</div>
                  <div className="text-lg font-bold">+62%</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Value</div>
                  <div className="flex items-center gap-1">
                    <Badge className="bg-primary text-primary-foreground text-xs">$288k</Badge>
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs font-semibold">7.9%</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Win rate</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs font-semibold">1.2%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button
              className="bg-foreground text-background hover:bg-foreground/90"
              onClick={() => console.log("[v0] Details button clicked")}
            >
              <Eye className="w-4 h-4 mr-2" />
              Details
            </Button>
          </div>

          {/* Data Table */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Team Performance</h3>
              <Button variant="ghost" size="sm" onClick={() => console.log("[v0] Export data")}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Sales</th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Revenue</th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Leads</th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">KPI</th>
                    <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">W/L</th>
                    <th className="text-right py-3 px-2 text-xs font-medium text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((person, idx) => (
                    <tr
                      key={idx}
                      onClick={() => {
                        setSelectedPerson(person.name)
                        console.log("[v0] Selected row:", person.name)
                      }}
                      className={`border-b border-border hover:bg-secondary/70 transition-colors cursor-pointer ${
                        selectedPerson === person.name ? "bg-secondary" : ""
                      }`}
                    >
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                              {person.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{person.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-semibold">${person.sales.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge variant="secondary" className="bg-foreground text-background">
                          {person.deals}
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm">{person.kpi}</span>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{person.wl}</span>
                          <Badge variant="secondary" className="bg-foreground text-background text-xs">
                            {person.conversion}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-right">
                        <span className="text-xs">{idx === 2 ? 29 : idx === 1 ? 33 : 29}</span>
                        <ChevronRight className="w-4 h-4 inline ml-2 text-muted-foreground" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform Revenue Card */}
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Platform value</h3>
                  <button onClick={() => console.log("[v0] Platform dropdown")}>
                    <ChevronDown className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-primary via-pink-500 to-pink-600 rounded-xl p-6 text-white">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="opacity-80 mb-1">Revenue</div>
                        <div className="text-2xl font-bold">$18,552</div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-white/20 text-white">$9,801</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="opacity-80 mb-1">Leads</div>
                        <div className="text-lg font-semibold">
                          373 <span className="opacity-60">97/276</span>
                        </div>
                      </div>
                      <div>
                        <div className="opacity-80 mb-1">Win/Loss</div>
                        <div className="text-lg font-semibold">
                          18% <span className="opacity-60">51/318</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {platformData.map((platform) => (
                    <button
                      key={platform.platform}
                      onClick={() => {
                        setSelectedPlatform(platform.platform)
                        console.log("[v0] Selected platform:", platform.platform)
                      }}
                      className={`w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors ${
                        selectedPlatform === platform.platform ? "bg-secondary" : ""
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: platform.color }}
                      >
                        {platform.platform[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{platform.platform}</span>
                          <span className="text-sm font-semibold">${platform.revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${platform.percentage}%`, backgroundColor: platform.color }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{platform.percentage}%</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Analytics Grid */}
            <div className="space-y-4">
              {/* Metric Cards Row */}
              <div className="grid grid-cols-3 gap-4">
                <Card
                  className="p-4 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => console.log("[v0] Top sales metric clicked")}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs">Top sales</span>
                  </div>
                </Card>
                <Card
                  className="p-4 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => console.log("[v0] Sales streak clicked")}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-orange-500/10 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-orange-500" />
                    </div>
                    <span className="text-xs">Sales streak</span>
                  </div>
                </Card>
                <Card
                  className="p-4 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => console.log("[v0] Top review clicked")}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-yellow-500/10 flex items-center justify-center">
                      <Star className="w-3 h-3 text-yellow-500" />
                    </div>
                    <span className="text-xs">Top review</span>
                  </div>
                </Card>
              </div>

              {/* Platform Stats */}
              <Card className="p-6">
                <h3 className="text-sm font-semibold mb-4">Work with platforms</h3>
                <div className="space-y-4">
                  {[
                    { name: "Dribbble", value: "$156,841", color: "bg-pink-500" },
                    { name: "Instagram", value: "28.1% $44,072", color: "bg-pink-400" },
                    { name: "Google", value: "14.1% ???/???", percent: "3", change: "$156,841", color: "bg-primary" },
                    { name: "Other", value: "7.1% $11,135", color: "bg-gray-400" },
                  ].map((platform, idx) => (
                    <button
                      key={idx}
                      onClick={() => console.log("[v0] Platform stat clicked:", platform.name)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg ${platform.color} flex items-center justify-center text-white text-xs font-semibold`}
                        >
                          {platform.name[0]}
                        </div>
                        <span className="text-sm">{platform.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{platform.value}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Sales Dynamic Chart */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold">Sales dynamic</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => console.log("[v0] Chart options clicked")}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timeSeriesData}>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line type="monotone" dataKey="value1" stroke="#ef4444" strokeWidth={1.5} dot={false} />
                      <Line type="monotone" dataKey="value2" stroke="#f97316" strokeWidth={1.5} dot={false} />
                      <Line type="monotone" dataKey="value3" stroke="#10b981" strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-muted-foreground mt-2 flex justify-between">
                  <span>W 1</span>
                  <span>W 5</span>
                  <span>W 7</span>
                  <span>W 9</span>
                  <span>W 11</span>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex items-center justify-center py-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made by</span>
              <span className="font-semibold text-primary">Suraj Thoke</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
