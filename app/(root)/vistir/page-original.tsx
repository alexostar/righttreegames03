import { StatusCard } from './_components/StatusCard';

import { prisma } from '@/db/prisma';

//import { Ecosystem } from '@/types';

// Change to import from types
type Ecosystem = {
  id: number;
  title: string;
  status: string;
  content: string;
  slug: string;
};

export default async function Vistir() {
  const ecosystems: Ecosystem[] = await prisma.ecosystem.findMany();

  if (!ecosystems?.length) {
    return <h1>No ecosystems to display</h1>;
  }

  return (
    <main className='min-h-screen bg-cover bg-center bg-no-repeat'>
      <div
        style={{
          backgroundImage:
            'url("https://hlkyrtglhpmrhzudaqzu.supabase.co/storage/v1/object/public/vin2024/SHM-steinadalur-DSC_4631.jpg")',
        }}>
        <div className='min-h-screen bg-black/50 py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-white/80 mt-16 mb-4'>
                Margs þarf að gæta þegar land er valið til skógræktar
              </h1>
              <p className='text-4xl font-bold text-white/80'>
                Í hvers konar land ertu að hugsa um gróðursetja tré?
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16'>
              {ecosystems.map((ecosystem) => (
                <div key={ecosystem.id} className='flex justify-center'>
                  <div className='w-full max-w-[200px]'>
                    <StatusCard key={ecosystem.id} ecosystem={ecosystem} />
                    {/*<p className='text-white font-bold'>{ecosystem.title}</p>*/}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='container max-w-5xl mx-auto flex flex-col justify-center items-center py-8'>
        <h3 className='text-muted-foreground text-xl font-bold mb-4'>
          Rétt tré á réttum stað
        </h3>
        <p className='text-muted-foreground text-lg'>
          Ræktun trjáa hefur aukist mikið hin síðari ár. Hún getur hjálpað til
          við að binda kolefni en er ekki eina lausnin á loftslagsbreytingum.
          Trjárækt getur ef rétt er á málum haldið gagnast villtum lífverum.
          Náttúrleg endurnýjun birkiskóga, landgræðsla, friðun lands og hófleg
          beitarnýting getur einnig dregið úr kolefnislosun og aukið bindingu.
          Ef plöntun trjáa er valin skiptir staðarval sköpum; núverandi búsvæði
          eru lífsnauðsynleg mörgum villtum lífverum og geyma nú þegar kolefni.
          Gróðursetning trjáa í mikilvæg búsvæði eins og í tegundaríkt
          graslendi, mólendi eða í votlendi er skaðlegt fyrir margar villtar
          lífverur, sem veldur fækkun plöntutegunda, skordýra og margra annarra
          lífvera.
        </p>
      </div>
    </main>
  );
}
