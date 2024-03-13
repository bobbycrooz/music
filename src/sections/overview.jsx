
import { Button } from '@/components/ui/button';
export default function Overview()
{

      return (
            <section id={"section"} className=" bg-primary min-h-screen w-full h-auto py-20">
                  <div className="heade centered w-full p-10">

                        <h1 className="section-title text-[60px] text-center font-">overview</h1>
                  </div>

                  <div className="content mt-10 flex items-center px-12 h-auto gap-10">

                        <div className="image-box w-[700px] h-[700px] border-2 border-white">
                              <img src="/image3.jpeg" alt="" className="full object-cover aspect-auto" />

                        </div>

                        <div className="w-[550px] flex flex-col space-y-4 text-left  gap-3">
                              <h1 className="font-semibold  uppercase text-[50px] leading-[110%] w-autotext-left font-mon">
                                    Discover the essence of Kenzo The Great Productions,
                              </h1>
                              <p className="font-mono text-3xl">
                                    bridging dreams to reality
                              </p>

                              <Button>learn more</Button>
                        </div>

                  </div>
            </section>
      );
}

