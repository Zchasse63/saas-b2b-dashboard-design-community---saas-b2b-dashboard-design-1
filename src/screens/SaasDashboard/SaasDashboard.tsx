import {
  BarChart3Icon,
  BellIcon,
  FolderIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MailIcon,
  PieChartIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const NavbarButton = ({ icon, isActive = false }) => (
  <Button
    variant="ghost"
    size="icon"
    className={`w-12 h-12 ${
      isActive ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-purple-100"
    }`}
  >
    {icon}
  </Button>
);

export const SaasDashboard = (): JSX.Element => {
  // Monthly data for the performance chart
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Sessions by device data
  const deviceData = [
    { device: "Desktop", sessions: 8085, percentage: "33%" },
    { device: "Mobile", sessions: 8085, percentage: "30%" },
    { device: "Tablets", sessions: 8085, percentage: "25%" },
  ];

  // Metrics data
  const metricsData = [
    {
      title: "Users",
      value: "72.6k",
      change: "+23%",
      icon: <UsersIcon className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Sessions",
      value: "87.2k",
      change: "+47%",
      icon: <LayoutDashboardIcon className="h-5 w-5 text-orange-500" />,
    },
    {
      title: "Bounce Rate",
      value: "26.3%",
      change: "-9%",
      icon: <BarChart3Icon className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Session Duration",
      value: "2m 18s",
      change: "+13%",
      icon: <PieChartIcon className="h-5 w-5 text-green-500" />,
    },
  ];

  // Daily overview data
  const dailyData = [
    { label: "Today", value: "5,461", expected: "", color: "bg-purple-500" },
    {
      label: "Expected",
      value: "8,085",
      expected: "USERS",
      color: "bg-purple-500",
    },
    { label: "Today", value: "140", expected: "", color: "bg-orange-500" },
    {
      label: "Expected",
      value: "120",
      expected: "GOALS",
      color: "bg-orange-500",
    },
  ];

  // Traffic sources data
  const trafficData = [
    { channel: "Direct", value: "23.28%", color: "bg-purple-500" },
    { channel: "Organic", value: "28.14%", color: "bg-orange-500" },
    { channel: "Referral", value: "18.59%", color: "bg-green-500" },
  ];

  return (
    <div className="bg-gray-100 flex flex-row justify-center w-full">
      <div className="w-full min-h-screen p-6 flex">
        {/* Sidebar */}
        <aside className="w-20 bg-white rounded-lg mr-6 flex flex-col items-center py-6 space-y-6 shadow-md">
          <NavbarButton icon={<HomeIcon className="h-6 w-6" />} isActive={true} />
          <NavbarButton icon={<LayoutDashboardIcon className="h-6 w-6" />} />
          <NavbarButton icon={<UsersIcon className="h-6 w-6" />} />
          <NavbarButton icon={<FolderIcon className="h-6 w-6" />} />
          <NavbarButton icon={<BarChart3Icon className="h-6 w-6" />} />
          <NavbarButton icon={<ShoppingCartIcon className="h-6 w-6" />} />
          <NavbarButton icon={<MailIcon className="h-6 w-6" />} />
          <NavbarButton icon={<SettingsIcon className="h-6 w-6" />} />
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-md">
          {/* Header */}
          <header className="flex justify-between items-center p-6 border-b">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <LayoutDashboardIcon className="h-6 w-6" />
            </Button>
            <div className="relative flex-1 max-w-md mx-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 bg-gray-50 pr-4 py-2 rounded-full"
                placeholder="Search Anything"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-500">
                <MailIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <BellIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Performance</CardTitle>
                <Button variant="outline" size="sm">This Year</Button>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] relative">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    <path
                      d="M0,100 C50,70 100,160 150,100 C200,40 250,120 300,80 C350,40 400,120 450,60 C500,0 550,80 600,100"
                      fill="none"
                      stroke="rgba(169,59,255,1)"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="absolute bottom-0 w-full flex justify-between px-2 text-sm text-gray-500">
                    {months.map((month) => (
                      <div key={month}>{month}</div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sessions By Device Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Sessions By Device</CardTitle>
                <div className="text-sm font-medium text-gray-500">Year</div>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(169,59,255,1)"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="167"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="rgba(255,100,50,1)"
                      strokeWidth="10"
                      strokeDasharray="188.4"
                      strokeDashoffset="131"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke="rgba(50,200,150,1)"
                      strokeWidth="10"
                      strokeDasharray="125.6"
                      strokeDashoffset="94"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="space-y-4">
                  {deviceData.map((item) => (
                    <div key={item.device} className="space-y-1">
                      <div className="text-sm font-medium text-gray-500">{item.device}</div>
                      <div className="text-lg font-bold">
                        {item.sessions.toLocaleString()}
                      </div>
                      <div className="text-xs font-medium text-gray-400">
                        {item.percentage}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Metrics Cards */}
            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metricsData.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-gray-100">
                        {metric.icon}
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          metric.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-500">{metric.title}</div>
                    <div className="text-2xl font-bold mt-1">{metric.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Daily Overview */}
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Daily Overview</CardTitle>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {dailyData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-500">
                          {item.label}
                        </div>
                        <div className="text-2xl font-bold mt-1">{item.value}</div>
                      </div>
                      {item.expected && (
                        <div className="relative w-16 h-16">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#f0f0f0"
                              strokeWidth="10"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke={item.color}
                              strokeWidth="10"
                              strokeDasharray="251.2"
                              strokeDashoffset="188"
                              transform="rotate(-90 50 50)"
                            />
                            <text
                              x="50"
                              y="55"
                              textAnchor="middle"
                              fontSize="10"
                              fill="#888"
                              fontWeight="bold"
                            >
                              {item.expected}
                            </text>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Channel</TableHead>
                      <TableHead>Traffic (%)</TableHead>
                      <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trafficData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.channel}</TableCell>
                        <TableCell>
                          <Progress
                            value={parseFloat(item.value)}
                            className={`h-2 ${item.color}`}
                          />
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {item.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Sessions By Device (Bottom) */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Sessions By Device</CardTitle>
                <div className="text-sm font-medium text-gray-500">
                  Top Region & Sources
                </div>
              </CardHeader>
              <CardContent className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  View
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
