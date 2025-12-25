"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Plus, Mail, Phone, MapPin, TrendingUp, TrendingDown } from "lucide-react"

const salesPeople = [
  {
    id: 1,
    name: "Armin Arlert",
    avatar: "AA",
    role: "Senior Sales Executive",
    email: "armin@codename.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    sales: 209633,
    deals: 118,
    winRate: 84,
    trend: "up",
    performance: 95,
  },
  {
    id: 2,
    name: "Mikasa Ackerman",
    avatar: "MA",
    role: "Sales Manager",
    email: "mikasa@codename.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, USA",
    sales: 156841,
    deals: 103,
    winRate: 89,
    trend: "up",
    performance: 92,
  },
  {
    id: 3,
    name: "Eren Yeager",
    avatar: "EY",
    role: "Sales Representative",
    email: "eren@codename.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, USA",
    sales: 117115,
    deals: 84,
    winRate: 79,
    trend: "down",
    performance: 78,
  },
  {
    id: 4,
    name: "Levi Ackerman",
    avatar: "LA",
    role: "Sales Director",
    email: "levi@codename.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, USA",
    sales: 245890,
    deals: 142,
    winRate: 91,
    trend: "up",
    performance: 98,
  },
  {
    id: 5,
    name: "Historia Reiss",
    avatar: "HR",
    role: "Junior Sales Executive",
    email: "historia@codename.com",
    phone: "+1 (555) 567-8901",
    location: "Boston, USA",
    sales: 89450,
    deals: 67,
    winRate: 72,
    trend: "up",
    performance: 85,
  },
]

export default function SalesListContent() {
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"sales" | "deals" | "winRate">("sales")

  const filteredSales = salesPeople
    .filter((person) => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b[sortBy] - a[sortBy])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Sales Team</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and track your sales team performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
        <div className="flex gap-2">
          <Button variant={sortBy === "sales" ? "default" : "outline"} size="sm" onClick={() => setSortBy("sales")}>
            Sales
          </Button>
          <Button variant={sortBy === "deals" ? "default" : "outline"} size="sm" onClick={() => setSortBy("deals")}>
            Deals
          </Button>
          <Button variant={sortBy === "winRate" ? "default" : "outline"} size="sm" onClick={() => setSortBy("winRate")}>
            Win Rate
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredSales.map((person) => (
          <Card
            key={person.id}
            className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
              selectedPerson === person.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedPerson(person.id)}
          >
            <div className="flex items-start gap-6">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="text-lg bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                  {person.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{person.name}</h3>
                    <Badge variant="secondary">{person.role}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {person.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {person.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {person.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Total Sales</div>
                    <div className="text-2xl font-bold">${(person.sales / 1000).toFixed(1)}k</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Deals Closed</div>
                    <div className="text-2xl font-bold">{person.deals}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Win Rate</div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">{person.winRate}%</div>
                      {person.trend === "up" ? (
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Performance</div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold">{person.performance}%</div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${person.performance}%` }}
                        />
                      </div>
                    </div>
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
