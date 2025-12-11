import { Search, HelpCircle, ChevronLeft, ChevronRight, ArrowUpRight, TrendingUp, TrendingDown, Rocket, Globe, Satellite, Navigation, Zap, Lock, Unlock, DollarSign, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const chartData = [
  { name: "2020", value: 100000000 },
  { name: "2021", value: 180000000 },
  { name: "2022", value: 250000000 },
  { name: "2023", value: 320000000 },
  { name: "2024", value: 350000000 },
  { name: "2025", value: 380000000 },
  { name: "2026", value: 420000000 },
  { name: "2027", value: 500000000 },
];

const spacexHoldings = [
  { name: "Falcon 9", units: "45 Units", value: "$85,000,000.00", status: "+18.45%", statusType: "up", icon: "🚀" },
  { name: "Starlink", units: "1,200 Units", value: "$120,000,000.00", status: "+32.15%", statusType: "up", icon: "🛰️" },
  { name: "Starship", units: "12 Units", value: "$95,000,000.00", status: "Testing", statusType: "pending", icon: "🪐" },
  { name: "Dragon", units: "8 Units", value: "$50,000,000.00", status: "+8.23%", statusType: "up", icon: "🐉" },
];

const spacexProjects = [
  { name: "Mars Colonization", investment: "$100M", progress: "Phase 2", color: "bg-red-500", icon: <Rocket className="w-5 h-5" /> },
  { name: "Global Internet", investment: "$50M", progress: "Deploying", color: "bg-blue-600", icon: <Globe className="w-5 h-5" /> },
  { name: "Lunar Base", investment: "$75M", progress: "Planning", color: "bg-gray-600", icon: <Navigation className="w-5 h-5" /> },
];

const spacexMetrics = [
  { name: "Successful Launches", value: "312", change: "+12%", icon: "🎯" },
  { name: "Satellites Deployed", value: "5,800+", change: "+45%", icon: "🛰️" },
  { name: "Crew to ISS", value: "14", change: "+3", icon: "👨‍🚀" },
];

// New promotion tiers
const withdrawalTiers = [
  { 
    name: "Basic Access", 
    price: "$300", 
    bonus: "Up to $400,000", 
    features: ["Limited Withdrawals", "Basic Support", "30-day Processing"],
    color: "bg-blue-900/30"
  },
  { 
    name: "Premium Unlock", 
    price: "$500", 
    bonus: "Up to $800,000", 
    features: ["Full Balance Access", "Priority Support", "Instant Processing", "2X Bonus Multiplier"],
    color: "bg-gradient-to-r from-purple-900/30 to-blue-900/30",
    highlighted: true
  },
  { 
    name: "Enterprise", 
    price: "$2,000", 
    bonus: "Up to $2,000,000", 
    features: ["All Features", "VIP Support", "Instant Processing", "Dedicated Account Manager"],
    color: "bg-orange-900/20"
  },
];

const Index = () => {
  const formatLargeNumber = (num: number) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    return `$${num.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
      {/* Navigation - SpaceX Inspired */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-10">
          {/* SpaceX Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Rocket className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SPACEX PORTFOLIO
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <span className="mr-2">🚀</span> Launches
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <span className="mr-2">🛰️</span> Starlink
            </Button>
            <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
              <span className="mr-2">💰</span> Holdings
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <span className="mr-2">🎯</span> Withdraw
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end text-sm">
            <span className="text-gray-400">Total Assets: <span className="text-white font-semibold">$350B</span></span>
            <span className="text-gray-400">Active Missions: <span className="text-blue-400">8</span></span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">
            SX
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8 max-w-7xl mx-auto">
        {/* Portfolio Header with SpaceX Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {/* SpaceX Logo and Main Balance */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Rocket className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-sm text-gray-400">SPACEX CORPORATION</h2>
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    $350,000,000,000
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gray-400">Company Valuation</span>
                <span className="flex items-center text-green-400 text-sm bg-green-900/20 px-2 py-1 rounded">
                  <TrendingUp className="w-4 h-4 mr-1" /> +24.5% this year
                </span>
              </div>
            </div>
            
            {/* SpaceX Metrics Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏛️</span>
                  <h3 className="text-sm text-gray-400">Companies</h3>
                </div>
                <p className="text-2xl font-bold text-white">10</p>
                <p className="text-xs text-gray-400 mt-1">SpaceX Corporation</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💵</span>
                  <h3 className="text-sm text-gray-400">Cash Balance</h3>
                </div>
                <p className="text-2xl font-bold text-green-400">$250,000</p>
                <p className="text-xs text-gray-400 mt-1">Liquid Assets</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⏳</span>
                  <h3 className="text-sm text-gray-400">Committed Cash</h3>
                </div>
                <p className="text-2xl font-bold text-yellow-400">$300</p>
                <p className="text-xs text-gray-400 mt-1">Pending Deployment</p>
              </div>
            </div>
          </div>

          {/* SpaceX Valuation Chart */}
          <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Company Valuation</h3>
                <p className="text-sm text-gray-400">2018-2027 Projection</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                <span className="text-sm">SpaceX Growth</span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis 
                  dataKey="name" 
                  stroke="#4B5563" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="#4B5563" 
                  fontSize={12}
                  tickFormatter={(value) => `$${(value / 100000000).toFixed(0)}B`}
                />
                <Tooltip 
                  formatter={(value: number) => [`$${(value / 1000000000).toFixed(2)}B`, 'Valuation']}
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="url(#spacexGradient)"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: '#8B5CF6' }}
                />
                <defs>
                  <linearGradient id="spacexGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
            
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Current Valuation</p>
                <p className="text-2xl font-bold">$350B</p>
              </div>
              <div className="flex gap-2">
                {['1Y', '3Y', '5Y', 'MAX'].map((period) => (
                  <Button 
                    key={period}
                    variant={period === 'MAX' ? 'default' : 'outline'}
                    size="sm"
                    className={`text-xs h-8 px-3 ${period === 'MAX' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}`}
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ⭐️ NEW: UNLOCK WITHDRAWAL SECTION */}
        <section className="mb-12 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-blue-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">🚀 Unlock Your Balance</h2>
                  <p className="text-gray-400">Activate withdrawal capabilities</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-yellow-500" />
                    <h3 className="text-sm text-gray-400">Current Status</h3>
                  </div>
                  <p className="text-lg font-semibold text-yellow-400">Withdrawal Locked</p>
                  <p className="text-xs text-gray-400 mt-1">Requires activation</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <h3 className="text-sm text-gray-400">Activation Fee</h3>
                  </div>
                  <p className="text-2xl font-bold text-white">$400</p>
                  <p className="text-xs text-gray-400 mt-1">One-time payment</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-purple-400" />
                    <h3 className="text-sm text-gray-400">Potential Bonus</h3>
                  </div>
                  <p className="text-2xl font-bold text-purple-400">$800,000</p>
                  <p className="text-xs text-gray-400 mt-1">2X bonus multiplier</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Unlock full balance withdrawal capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Get 2X bonus multiplier on your investment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Instant processing with priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Access up to $800,000 in total balance</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/30 text-center">
                <h3 className="text-xl font-bold mb-2">🚀 Premium Unlock</h3>
                <p className="text-3xl font-bold text-white mb-2">$400</p>
                <p className="text-lg text-purple-300 mb-4">Get up to $800,000</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6">
                  <Unlock className="w-5 h-5 mr-2" />
                  Unlock Withdrawal Now
                </Button>
                <p className="text-xs text-gray-400 mt-4">One-time payment • Instant access • 30-day guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Tiers */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">💎 Withdrawal Plans</h2>
            <span className="text-sm text-gray-400">Choose your unlock tier</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {withdrawalTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`${tier.color} rounded-2xl p-6 border ${tier.highlighted ? 'border-purple-500/50' : 'border-gray-800'} ${tier.highlighted ? 'ring-2 ring-purple-500/30' : ''}`}
              >
                {tier.highlighted && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-semibold mb-4">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-white">{tier.price}</p>
                  <p className="text-lg text-green-400">{tier.bonus}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${tier.highlighted ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {tier.highlighted ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Get This Plan
                    </>
                  ) : (
                    'Select Plan'
                  )}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">🚀 Ongoing</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spacexProjects.map((project) => (
              <div 
                key={project.name}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">{project.progress}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-6">Capital Deployed: {project.investment}</p>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Ongoing
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-700 hover:bg-gray-800">
                    Ongoing
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Holdings and Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SpaceX Holdings */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">🛰️ SpaceX Holdings</h2>
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                View All <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {spacexHoldings.map((holding) => (
                <div 
                  key={holding.name}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl">{holding.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{holding.name}</h3>
                        <p className="text-sm text-gray-400">{holding.units}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{holding.value}</p>
                      <p className={`text-sm ${
                        holding.statusType === 'pending' ? 'text-yellow-400' :
                        holding.statusType === 'up' ? 'text-green-400' :
                        'text-red-400'
                      }`}>
                        {holding.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SpaceX Performance Metrics */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">📊 Performance Metrics</h2>
            </div>
            
            <div className="space-y-4">
              {spacexMetrics.map((metric) => (
                <div 
                  key={metric.name}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{metric.icon}</span>
                      <div>
                        <h3 className="font-medium">{metric.name}</h3>
                        <p className="text-sm text-gray-400">Last 12 months</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl">{metric.value}</p>
                      <p className="text-sm text-green-400">{metric.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Launch */}
            <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4">🚀 Next Launch</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mission:</span>
                  <span className="font-semibold">Starlink Group 8-1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="font-semibold">Dec 15, 2024 - 14:30 UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vehicle:</span>
                  <span className="font-semibold">Falcon 9 Block 5</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 pt-8 pb-6 px-8 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-6">
            <span>Withdrawal requires activation. Terms apply.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-400 flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Systems Nominal
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;