import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';

export default function Presection()
{

      return (
            <div data-scroll data-scroll-speed='2' className="centered h-[400px]">
                  <h1 className="pre-section-title capitalize">overview</h1>
            </div>
      );
}


export const ParaOne = ({ title }) => (
      <Parallax blur={0} bgImage="/Landing-page.jpg" bgImageAlt="the cat" strength={200}>
            <div className="h-[60vh] w-full flex bg-[#da111188]">
                  <h1 className="pre-section-title capitalize">content</h1>

            </div>
      </Parallax>
);