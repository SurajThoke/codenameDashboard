"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  TrendingUp,
  Award,
  Target,
  DollarSign,
  Edit,
  Camera,
  Briefcase,
} from "lucide-react"
import { LineChart, Line, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const performanceData = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  sales: 15000 + Math.random() * 10000,
  deals: 8 + Math.random() * 6,
}))

const achievements = [
  {
    title: "Top Performer",
    description: "Highest sales in Q3 2023",
    date: "Sep 2023",
    icon: Award,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Deal Closer",
    description: "100+ deals closed",
    date: "Aug 2023",
    icon: Target,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Revenue Champion",
    description: "$1M+ in revenue",
    date: "Jul 2023",
    icon: DollarSign,
    color: "bg-green-100 text-green-600",
  },
]

const recentActivity = [
  { action: "Closed deal with Acme Corp", value: "$45,000", time: "2 hours ago", type: "success" },
  { action: "Updated proposal for TechStart", value: "$78,000", time: "5 hours ago", type: "update" },
  { action: "Meeting with Global Solutions", value: "$56,000", time: "1 day ago", type: "meeting" },
  { action: "Closed deal with Innovation Labs", value: "$34,000", time: "2 days ago", type: "success" },
]

export default function ProfileContent() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-foreground">Profile</h1>
        <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
          <Edit className="w-4 h-4 mr-2" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-1 p-6">
          <div className="space-y-6">
            <div className="relative mx-auto w-32 h-32">
              <Avatar className="w-32 h-32">
                <AvatarFallback className="text-4xl bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                  ST
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Camera className="w-5 h-5 text-primary-foreground" />
                </button>
              )}
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Suraj Thoke</h2>
              <Badge variant="secondary" className="text-xs">
                Senior Sales Executive
              </Badge>
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>suraj.thoke@codename.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Joined Jan 2022</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span>2 years at Codename</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-2">
              <h3 className="text-sm font-semibold">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experienced sales professional with a proven track record of exceeding targets and building lasting
                client relationships. Passionate about driving revenue growth and team success.
              </p>
            </div>
          </div>
        </Card>

        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Total Sales</div>
                <div className="text-2xl font-bold">$528k</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+23%</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Deals Closed</div>
                <div className="text-2xl font-bold">118</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15%</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Win Rate</div>
                <div className="text-2xl font-bold">84%</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+5%</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Avg Deal Size</div>
                <div className="text-2xl font-bold">$4.5k</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12%</span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={performanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Deals</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="deals" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon
                return (
                  <button
                    key={idx}
                    className="p-4 rounded-lg border border-border hover:shadow-lg transition-all hover:border-primary"
                  >
                    <div className="space-y-3">
                      <div
                        className={`w-12 h-12 rounded-lg ${achievement.color} flex items-center justify-center mx-auto`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{achievement.description}</div>
                        <div className="text-xs text-muted-foreground mt-2">{achievement.date}</div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "success"
                          ? "bg-green-500"
                          : activity.type === "update"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                      }`}
                    />
                    <div>
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                  <Badge variant="secondary">{activity.value}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
