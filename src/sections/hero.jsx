import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Slides } from "@/components/slides";

export default function Hero()
{

      return (
            <div data-scroll data-scroll-speed="1" className="">
              <Slides/>
            </div>
      );
}

