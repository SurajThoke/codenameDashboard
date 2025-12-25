"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Bell,
  Lock,
  Palette,
  Globe,
  Database,
  Shield,
  Mail,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Check,
} from "lucide-react"

const settingsSections = [
  { id: "account", label: "Account", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "language", label: "Language & Region", icon: Globe },
  { id: "data", label: "Data & Privacy", icon: Database },
]

export default function SettingsContent() {
  const [activeSection, setActiveSection] = useState("account")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [theme, setTheme] = useState("light")

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card className="col-span-1 p-4">
          <nav className="space-y-1">
            {settingsSections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              )
            })}
          </nav>
        </Card>

        <div className="col-span-3 space-y-6">
          {activeSection === "account" && (
            <>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <input
                        type="text"
                        defaultValue="Suraj"
                        className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Thoke"
                        className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <input
                      type="email"
                      defaultValue="suraj.thoke@codename.com"
                      className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Job Title</label>
                    <input
                      type="text"
                      defaultValue="Senior Sales Executive"
                      className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Button>Save Changes</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Account Status</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Account Type</div>
                    <div className="text-sm text-muted-foreground">Professional Plan</div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>
              </Card>
            </>
          )}

          {activeSection === "notifications" && (
            <>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className="w-full flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive updates via email</div>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-6 rounded-full transition-colors ${
                        emailNotifications ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white mt-0.5 transition-transform ${
                          emailNotifications ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </button>

                  <button
                    onClick={() => setPushNotifications(!pushNotifications)}
                    className="w-full flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive push notifications</div>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-6 rounded-full transition-colors ${
                        pushNotifications ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white mt-0.5 transition-transform ${
                          pushNotifications ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                <div className="space-y-3">
                  {["New deals", "Deal updates", "Team mentions", "Weekly reports", "System updates"].map((pref) => (
                    <label
                      key={pref}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary cursor-pointer"
                    >
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm">{pref}</span>
                    </label>
                  ))}
                </div>
              </Card>
            </>
          )}

          {activeSection === "security" && (
            <>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Button>Update Password</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                <button
                  onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                  className="w-full flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-6 rounded-full transition-colors ${twoFactorAuth ? "bg-primary" : "bg-secondary"}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white mt-0.5 transition-transform ${
                        twoFactorAuth ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </button>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Current Session</div>
                        <div className="text-sm text-muted-foreground">New York, USA - Chrome on MacOS</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                </div>
              </Card>
            </>
          )}

          {activeSection === "appearance" && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Theme</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: "light", label: "Light", icon: Sun },
                  { id: "dark", label: "Dark", icon: Moon },
                  { id: "system", label: "System", icon: Monitor },
                ].map((themeOption) => {
                  const Icon = themeOption.icon
                  return (
                    <button
                      key={themeOption.id}
                      onClick={() => setTheme(themeOption.id)}
                      className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                        theme === themeOption.id ? "border-primary bg-primary/5" : "border-border"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-center font-medium">{themeOption.label}</div>
                        {theme === themeOption.id && (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </Card>
          )}

          {activeSection === "language" && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Language & Region Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Language</label>
                  <select className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Time Zone</label>
                  <select className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Date Format</label>
                  <select className="w-full px-3 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button>Save Changes</Button>
              </div>
            </Card>
          )}

          {activeSection === "data" && (
            <>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Data Management</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Database className="w-4 h-4 mr-2" />
                    Download Your Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Shield className="w-4 h-4 mr-2" />
                    Privacy Settings
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-red-200">
                <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium mb-2">Delete Account</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </div>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
