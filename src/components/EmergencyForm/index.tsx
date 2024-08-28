import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SelfEvacuationForm from '@/components/EmergencyForm/SelfEvacuationForm'
import ProxyEvacuationForm from '@/components/EmergencyForm/ProxyEvacuationForm'

export default function EmergencyForm() {
  return (
    <div className="w-full bg-nightBlue rounded-2xl p-5 space-y-5">
      <div className="border-b border-background text-4xl font-medium flex-center p-5">
        <h3 className="text-center">Acil Durum Tahliye Başvurusu</h3>
      </div>
      <Tabs defaultValue="self" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto text-nightBlue">
          <TabsTrigger value="self" className="text-lg lg:text-2xl">
            Kendi Adıma
          </TabsTrigger>
          <TabsTrigger value="other" className="text-lg lg:text-2xl">
            Başkası Adına
          </TabsTrigger>
        </TabsList>
        <TabsContent value="self">
          <SelfEvacuationForm />
        </TabsContent>
        <TabsContent value="other">
          <ProxyEvacuationForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
