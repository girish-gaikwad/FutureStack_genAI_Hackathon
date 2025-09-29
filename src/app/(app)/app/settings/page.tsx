"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Bell,
  Settings,
  Volume2,
  Moon,
  Globe,
  Shield,
  Key,
  Download,
  Trash2,
  ArrowLeft,
  Smartphone,
  Mail,
  Monitor,
  Palette,
  Database,
  Lock,
  User,
  Eye,
  EyeOff
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState({
    studyReminders: true,
    weeklyProgress: true,
    newContent: false,
    achievements: true,
    emailDigest: false,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true
  })

  const [preferences, setPreferences] = useState({
    darkMode: false,
    language: "English",
    autoPlayVideos: true,
    soundEffects: true,
    dataUsage: "wifi",
    theme: "system",
    fontSize: "medium",
    animations: true
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-semibold">Settings</h1>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto space-y-6">

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl p-1">
            <TabsTrigger value="notifications" className="rounded-xl">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="preferences" className="rounded-xl">
              <Settings className="w-4 h-4 mr-2" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="privacy" className="rounded-xl">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-xl">
              <Lock className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Study Notifications */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Bell className="w-5 h-5" />
                    </div>
                    Study Notifications
                  </CardTitle>
                  <CardDescription>Manage notifications related to your learning</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Study Reminders</p>
                      <p className="text-sm text-muted-foreground">Get reminded about your study schedule</p>
                    </div>
                    <Switch
                      checked={notifications.studyReminders}
                      onCheckedChange={(checked) => handleNotificationChange('studyReminders', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Progress</p>
                      <p className="text-sm text-muted-foreground">Weekly performance summary</p>
                    </div>
                    <Switch
                      checked={notifications.weeklyProgress}
                      onCheckedChange={(checked) => handleNotificationChange('weeklyProgress', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Content</p>
                      <p className="text-sm text-muted-foreground">Notifications about new study materials</p>
                    </div>
                    <Switch
                      checked={notifications.newContent}
                      onCheckedChange={(checked) => handleNotificationChange('newContent', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Achievements</p>
                      <p className="text-sm text-muted-foreground">Achievement and milestone alerts</p>
                    </div>
                    <Switch
                      checked={notifications.achievements}
                      onCheckedChange={(checked) => handleNotificationChange('achievements', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Communication Notifications */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Mail className="w-5 h-5" />
                    </div>
                    Communication
                  </CardTitle>
                  <CardDescription>Control how we communicate with you</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Digest</p>
                      <p className="text-sm text-muted-foreground">Daily digest via email</p>
                    </div>
                    <Switch
                      checked={notifications.emailDigest}
                      onCheckedChange={(checked) => handleNotificationChange('emailDigest', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Push notifications on device</p>
                    </div>
                    <Switch
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) => handleNotificationChange('pushNotifications', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">Receive promotional content</p>
                    </div>
                    <Switch
                      checked={notifications.marketingEmails}
                      onCheckedChange={(checked) => handleNotificationChange('marketingEmails', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-muted-foreground">Important security notifications</p>
                    </div>
                    <Switch
                      checked={notifications.securityAlerts}
                      onCheckedChange={(checked) => handleNotificationChange('securityAlerts', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Appearance */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Palette className="w-5 h-5" />
                    </div>
                    Appearance
                  </CardTitle>
                  <CardDescription>Customize how the app looks and feels</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Moon className="w-4 h-4" />
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                      </div>
                    </div>
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-4 h-4" />
                      <Label>Theme</Label>
                    </div>
                    <Select value={theme} onValueChange={(value) => setTheme(value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <Select value={preferences.fontSize} onValueChange={(value) => handlePreferenceChange('fontSize', value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Animations</p>
                      <p className="text-sm text-muted-foreground">Enable interface animations</p>
                    </div>
                    <Switch
                      checked={preferences.animations}
                      onCheckedChange={(checked) => handlePreferenceChange('animations', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Content & Media */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    Content & Media
                  </CardTitle>
                  <CardDescription>Control media playback and data usage</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4" />
                      <Label>Language</Label>
                    </div>
                    <Select value={preferences.language} onValueChange={(value) => handlePreferenceChange('language', value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hindi">हिंदी</SelectItem>
                        <SelectItem value="Tamil">தமிழ்</SelectItem>
                        <SelectItem value="Telugu">తెలుగు</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4" />
                      <div>
                        <p className="font-medium">Sound Effects</p>
                        <p className="text-sm text-muted-foreground">Play sounds for interactions</p>
                      </div>
                    </div>
                    <Switch
                      checked={preferences.soundEffects}
                      onCheckedChange={(checked) => handlePreferenceChange('soundEffects', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-play Videos</p>
                      <p className="text-sm text-muted-foreground">Automatically play video content</p>
                    </div>
                    <Switch
                      checked={preferences.autoPlayVideos}
                      onCheckedChange={(checked) => handlePreferenceChange('autoPlayVideos', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Data Usage</Label>
                    <Select value={preferences.dataUsage} onValueChange={(value) => handlePreferenceChange('dataUsage', value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wifi">WiFi Only</SelectItem>
                        <SelectItem value="all">WiFi & Mobile Data</SelectItem>
                        <SelectItem value="low">Low Data Mode</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="overflow-hidden rounded-3xl">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                    <Database className="w-5 h-5" />
                  </div>
                  Data & Privacy
                </CardTitle>
                <CardDescription>Manage your data and privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Download My Data</p>
                        <p className="text-sm text-muted-foreground">Export all your account data</p>
                      </div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Data Usage Analytics</p>
                        <p className="text-sm text-muted-foreground">View how your data is used</p>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Privacy Policy</p>
                        <p className="text-sm text-muted-foreground">Read our privacy policy</p>
                      </div>
                    </div>
                  </Button>

                                    <Button variant="destructive" className="w-full rounded-2xl">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Account Security */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Lock className="w-5 h-5" />
                    </div>
                    Account Security
                  </CardTitle>
                  <CardDescription>Protect your account with strong security</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter current password"
                        className="rounded-xl pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <Button className="w-full rounded-2xl">
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              {/* Two-Factor Authentication */}
              <Card className="overflow-hidden rounded-3xl">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                      <Key className="w-5 h-5" />
                    </div>
                    Two-Factor Authentication
                  </CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-xl">
                    <div>
                      <p className="font-medium">SMS Authentication</p>
                      <p className="text-sm text-muted-foreground">Receive codes via SMS</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-xl">
                    <div>
                      <p className="font-medium">Authenticator App</p>
                      <p className="text-sm text-muted-foreground">Use Google Authenticator or similar</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Setup
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-xl">
                    <div>
                      <p className="font-medium">Backup Codes</p>
                      <p className="text-sm text-muted-foreground">Generate recovery codes</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </main>
    </div>
  )
}