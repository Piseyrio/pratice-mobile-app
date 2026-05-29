import {
    ArrowLeftRight,
    BadgeCheck,
    BarChart3,
    Calendar,
    ChevronRight,
    ChevronUp,
    CircleDollarSign,
    CirclePlus,
    Download,
    Eye,
    FileText,
    Send,
    Share2,
    Table,
    Trash2,
    Wallet,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MONTHS = [
  "March 2026",
  "April 2026",
  "May 2026",
  "June 2026",
  "July 2026",
] as const;

const PENDING_INVOICES = [
  {
    id: "#f6a2b6e1",
    student: "ទន់ មកនន",
    teacher: "Chinese Ly Ya",
    amount: "$3.00",
  },
  {
    id: "#d3aa7c9f",
    student: "ទងគ ទន់ននន",
    teacher: "English Ly Ya",
    amount: "$3.00",
  },
] as const;

const TEACHERS = [
  {
    name: "Fan Xia",
    students: 5,
    motorYes: 3,
    motorNo: 2,
    paid: "$0",
    pending: "$0",
    chargePaid: "$13.00",
  },
  {
    name: "John Smith",
    students: 8,
    motorYes: 5,
    motorNo: 3,
    paid: "$1,200",
    pending: "$200",
    chargePaid: "$45.00",
  },
  {
    name: "Mary Jane",
    students: 4,
    motorYes: 4,
    motorNo: 0,
    paid: "$800",
    pending: "$50",
    chargePaid: "$20.00",
  },
] as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <Text className="text-[10px] font-bold uppercase tracking-wider text-[#484553]">
      {children}
    </Text>
  );
}

function InvoiceCard({
  invoiceId,
  student,
  teacher,
  amount,
  status,
}: {
  invoiceId: string;
  student: string;
  teacher: string;
  amount: string;
  status: "pending" | "paid";
}) {
  const isPending = status === "pending";

  return (
    <View className="gap-3 rounded-2xl border border-[#cac4d5]/10 bg-white/80 p-4 shadow-sm">
      <View className="flex-row items-start justify-between">
        <View className="gap-1">
          <SectionLabel>Invoice ID</SectionLabel>
          <Text className="text-sm font-medium text-[#171c24]">
            {invoiceId}
          </Text>
        </View>
        <View
          className={`rounded px-2.5 py-1 ${isPending ? "bg-amber-100" : "bg-green-100"}`}
        >
          <Text
            className={`text-[10px] font-bold uppercase tracking-wider ${isPending ? "text-amber-800" : "text-green-800"}`}
          >
            {isPending ? "Pending" : "PAID"}
          </Text>
        </View>
      </View>

      <View className="flex-row gap-4">
        <View className="flex-1 gap-1">
          <SectionLabel>Student</SectionLabel>
          <Text className="text-sm text-[#171c24]">{student}</Text>
        </View>
        <View className="flex-1 gap-1">
          <SectionLabel>Teacher</SectionLabel>
          <Text className="text-sm text-[#171c24]">{teacher}</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between border-t border-[#cac4d5]/10 pt-3">
        <View>
          <SectionLabel>Amount</SectionLabel>
          <Text className="text-lg font-bold text-[#171c24]">{amount}</Text>
        </View>
        {isPending ? (
          <Pressable className="h-10 w-10 items-center justify-center rounded-full active:bg-red-50">
            <Trash2 size={22} color="#ba1a1a" />
          </Pressable>
        ) : (
          <View className="h-10 w-10 items-center justify-center rounded-full bg-green-50">
            <BadgeCheck size={22} color="#16a34a" />
          </View>
        )}
      </View>
    </View>
  );
}

function ExportChip({
  label,
  icon: Icon,
  primary,
}: {
  label: string;
  icon: typeof Download;
  primary?: boolean;
}) {
  return (
    <Pressable
      className={`flex-row items-center gap-1.5 rounded-lg px-3 py-2 ${
        primary ? "bg-[#005eb1]" : "border border-[#cac4d5] bg-[#f1f3ff]"
      }`}
    >
      <Icon size={18} color={primary ? "#ffffff" : "#484553"} />
      <Text
        className={`text-xs font-semibold uppercase tracking-wide ${
          primary ? "text-white" : "text-[#484553]"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function Transact() {
  const [selectedMonth, setSelectedMonth] = useState<string>("May 2026");

  return (
    <SafeAreaView className="flex-1 bg-[#f4f7ff]" edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pb-28 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6">
          <Text className="mb-2 text-[28px] font-semibold leading-9 text-[#171c24]">
            Transactions
          </Text>
          <Text className="text-base leading-6 text-[#484553]">
            Manage your school billing, track tuition payments, and monitor
            extracurricular activity balances in one crystalline view.
          </Text>
        </View>

        <Pressable className="mb-4 flex-row items-center justify-center gap-2 rounded-xl bg-[#1b0058] py-4 shadow-lg active:opacity-90">
          <CirclePlus size={22} color="#ffffff" />
          <Text className="text-base font-semibold text-white">
            Record Manual Payment
          </Text>
        </Pressable>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6 -mx-4"
          contentContainerClassName="gap-2 px-4"
        >
          <ExportChip label="Export CSV" icon={Download} />
          <ExportChip label="Export Full Report" icon={FileText} />
          <ExportChip label="Live PDF" icon={Eye} primary />
          <ExportChip label="Export Excel" icon={Table} />
          <ExportChip label="Export Status CSV" icon={BarChart3} />
        </ScrollView>

        <View className="mb-6">
          <View className="mb-3 flex-row items-center justify-between px-1">
            <Text className="text-xs font-bold uppercase tracking-wider text-[#484553]">
              Select Month
            </Text>
            <Pressable className="flex-row items-center gap-1">
              <Calendar size={16} color="#1b0058" />
              <Text className="text-xs font-semibold text-[#1b0058]">
                Calendar
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-4"
            contentContainerClassName="gap-3 px-4"
          >
            {MONTHS.map((month) => {
              const selected = month === selectedMonth;
              return (
                <Pressable
                  key={month}
                  onPress={() => setSelectedMonth(month)}
                  className={`rounded-full px-5 py-2.5 ${
                    selected
                      ? "bg-[#1b0058] shadow-md"
                      : "border border-[#cac4d5] bg-white/50"
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      selected
                        ? "font-semibold text-white"
                        : "font-medium text-[#484553]"
                    }`}
                  >
                    {month}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <View className="mb-8 gap-6">
          <View className="items-center rounded-3xl bg-[#0D6E74] p-8 shadow-lg">
            <Text className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              Total balance
            </Text>
            <Text className="mb-6 text-5xl font-bold tracking-tight text-white">
              $18,240
            </Text>
            <View className="w-full max-w-md flex-row justify-between border-t border-white/20 pt-6">
              <View>
                <Text className="mb-1 text-xs uppercase text-white/70">
                  PAY HISTORY
                </Text>
                <Text className="text-lg font-bold text-white">$8,960</Text>
              </View>
              <View>
                <Text className="mb-1 text-xs uppercase text-white/70">
                  CHARGE
                </Text>
                <Text className="text-lg font-bold text-white">$4,820</Text>
              </View>
              <View>
                <Text className="mb-1 text-xs uppercase text-white/70">
                  DISCOUNT
                </Text>
                <Text className="text-lg font-bold text-white">$4,140</Text>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3">
            <Pressable className="flex-1 flex-row items-center justify-center gap-2 rounded-xl bg-[#0D6E74] py-3 shadow-lg active:opacity-90">
              <Send size={16} color="#ffffff" />
              <Text className="font-medium text-white">Send</Text>
            </Pressable>
            <Pressable className="flex-1 flex-row items-center justify-center gap-2 rounded-xl border border-[#0D6E74]/10 bg-white py-3 shadow-sm active:opacity-90">
              <Wallet size={16} color="#0D6E74" />
              <Text className="font-medium text-[#0D6E74]">Receive</Text>
            </Pressable>
            <Pressable className="flex-1 flex-row items-center justify-center gap-2 rounded-xl border border-[#0D6E74]/10 bg-white py-3 shadow-sm active:opacity-90">
              <ArrowLeftRight size={16} color="#0D6E74" />
              <Text className="font-medium text-[#0D6E74]">Convert</Text>
            </Pressable>
          </View>

          <View className="flex-row items-center justify-between overflow-hidden rounded-3xl bg-[#0D6E74] p-6">
            <View className="z-10 max-w-[200px]">
              <Text className="mb-2 text-xl font-bold leading-7 text-white">
                Be In Control Of{"\n"}Your Finance
              </Text>
              <Text className="text-xs text-white/80">
                Nova gives you clarity and control over your money.
              </Text>
            </View>
            <CircleDollarSign size={56} color="rgba(255,255,255,0.3)" />
          </View>
        </View>

        <View className="mb-10 overflow-hidden rounded-3xl border border-white/40 bg-white/50">
          <View className="flex-row flex-wrap items-center justify-between gap-2 border-b border-[#cac4d5]/30 bg-amber-50/30 p-4">
            <View className="flex-row items-center gap-3">
              <ChevronUp size={22} color="#d97706" />
              <Text className="text-xl font-semibold text-amber-800">
                Pending Payments
              </Text>
              <View className="rounded-md border border-amber-200 bg-white px-2 py-0.5">
                <Text className="text-xs font-bold text-amber-800">2</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <Pressable className="flex-row items-center gap-1 rounded-md border border-[#cac4d5]/30 px-2 py-1">
                <Share2 size={16} color="#484553" />
                <Text className="text-xs font-semibold text-[#484553]">
                  Export
                </Text>
              </Pressable>
              <Pressable className="flex-row items-center gap-1">
                <Text className="text-xs font-semibold text-[#1b0058]">
                  View All
                </Text>
                <ChevronRight size={16} color="#1b0058" />
              </Pressable>
            </View>
          </View>
          <View className="gap-4 p-4">
            {PENDING_INVOICES.map((invoice) => (
              <InvoiceCard
                key={invoice.id}
                invoiceId={invoice.id}
                student={invoice.student}
                teacher={invoice.teacher}
                amount={invoice.amount}
                status="pending"
              />
            ))}
          </View>
        </View>

        <View className="mb-10 overflow-hidden rounded-3xl border border-white/40 bg-white/50">
          <View className="flex-row flex-wrap items-center justify-between gap-2 border-b border-[#cac4d5]/30 bg-green-50/30 p-4">
            <View className="flex-row items-center gap-3">
              <BadgeCheck size={22} color="#16a34a" />
              <Text className="text-xl font-semibold text-green-800">
                Recent Success Payments
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Pressable className="flex-row items-center gap-1.5 rounded-lg border border-[#cac4d5]/50 px-3 py-1.5">
                <Share2 size={18} color="#1b0058" />
                <Text className="text-xs font-semibold text-[#1b0058]">
                  Export
                </Text>
              </Pressable>
              <Pressable className="flex-row items-center gap-1">
                <Text className="text-xs font-semibold text-[#1b0058]">
                  View All
                </Text>
                <ChevronRight size={16} color="#1b0058" />
              </Pressable>
            </View>
          </View>
          <View className="gap-4 p-4">
            <InvoiceCard
              invoiceId="Term 3 Tuition"
              student="David Smith"
              teacher="Chinese Ly Ya"
              amount="$450.00"
              status="paid"
            />
          </View>
        </View>

        <View className="mb-10">
          <Text className="mb-4 text-2xl font-semibold text-[#171c24]">
            Teacher Breakdown
          </Text>
          <View className="gap-4">
            {TEACHERS.map((teacher) => (
              <View
                key={teacher.name}
                className="gap-4 rounded-xl border border-white/40 bg-white/70 p-5 shadow-sm"
              >
                <View>
                  <Text className="text-base font-semibold text-[#1b0058]">
                    {teacher.name}
                  </Text>
                  <Text className="text-[11px] text-[#484553]">
                    {teacher.students} Students Total
                  </Text>
                </View>
                <View className="gap-2">
                  <View>
                    <SectionLabel>Motor Status</SectionLabel>
                    <Text className="text-sm text-[#171c24]">
                      <Text className="font-semibold text-green-600">
                        {teacher.motorYes}
                      </Text>{" "}
                      Have motor |{" "}
                      <Text className="font-semibold text-[#484553]">
                        {teacher.motorNo}
                      </Text>{" "}
                      No motor
                    </Text>
                  </View>
                  <View>
                    <SectionLabel>Payments</SectionLabel>
                    <Text className="text-sm text-[#171c24]">
                      Paid:{" "}
                      <Text className="font-semibold">{teacher.paid}</Text> |
                      Pending:{" "}
                      <Text className="font-semibold">{teacher.pending}</Text> |
                      ChargePaid:{" "}
                      <Text className="font-semibold text-[#1b0058]">
                        {teacher.chargePaid}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Pressable className="mt-4 items-center py-2">
            <Text className="text-xs font-semibold text-[#1b0058]">
              View All Teachers
            </Text>
          </Pressable>

          <View className="mt-8 rounded-xl border border-[#1b0058]/20 bg-[#1b0058]/5 p-6">
            <Text className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#1b0058]">
              Grand Total Breakdown
            </Text>
            <View className="gap-4">
              <View>
                <Text className="text-2xl font-bold text-[#1b0058]">
                  5 Students Total (All)
                </Text>
                <Text className="text-sm text-[#484553]">
                  Consolidated overview
                </Text>
              </View>
              <View className="gap-4">
                <View className="border-l-2 border-[#1b0058]/10 pl-4">
                  <SectionLabel>Total Motor Count</SectionLabel>
                  <Text className="text-lg font-semibold text-[#171c24]">
                    3 <Text className="text-xs font-normal">Yes</Text> / 2{" "}
                    <Text className="text-xs font-normal">No</Text>
                  </Text>
                </View>
                <View className="border-l-2 border-[#1b0058]/10 pl-4">
                  <SectionLabel>Total ChargePaid</SectionLabel>
                  <Text className="text-lg font-semibold text-[#1b0058]">
                    $13.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
