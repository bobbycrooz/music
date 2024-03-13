import { motion } from "framer-motion";
import { Fragment } from "react";

const transition = (Comp) =>
{
      // eslint-disable-next-line react/display-name
      return () => (
            <Fragment>
                  <Comp />

                  <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 1 }}
                        className="slide-in"
                  />

                  <motion.div
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        className="slide-out"
                  />
            </Fragment>
      );
};


export default transition