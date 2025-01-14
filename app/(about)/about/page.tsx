import Image from 'next/image';

export default async function HomePage() {
  return (
    <main className='min-h-screen'>
      <div className='relative'>
        <Image
          src='/images/Steinadalur_SHM_4631.jpg'
          alt='Background landscape'
          fill
          priority
          className='object-cover z-0'
        />
        <div className='relative z-10 bg-black/50 py-36 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-white/80 mb-8'>
                Niðurstöður verkefnis á vegum Vina íslenskrar náttúru
              </p>
              <h1 className='text-6xl font-bold text-white/80'>
                Rétt tré á réttum stað
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-3xl mx-auto flex flex-col justify-center items-center py-8'>
        <p className='text-muted-foreground text-2xl italic'>
          „Gróðursetning trjáa í mikilvæg búsvæði eins og í tegundaríkt
          graslendi, mólendi eða í votlendi er skaðlegt fyrir margar villtar
          lífverur, sem veldur fækkun plöntutegunda, skordýra og margra annarra
          lífvera“.
        </p>
      </div>
    </main>
  );
}
