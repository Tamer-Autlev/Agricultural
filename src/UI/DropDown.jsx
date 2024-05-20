import {
  FiEdit,
  FiChevronDown,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = ({ setLang,lang }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center  z-50">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50  transition-colors"
        >
          <span className="font-medium text-sm">{`${lang?`Language`:`اللغة`}`}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-[170px]  overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            Icon={FiEdit}
            
            setLang={setLang}
          />
          
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({  Icon, setOpen,setLang }) => {
  return (
    <>
      <motion.li
        variants={itemVariants}
        onClick={() => {
          setOpen(false);
          setLang(true);
        }}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-primary-yellow text-slate-700 hover:text-white transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}></motion.span>
        <span>English</span>
      </motion.li>
      <motion.li
        variants={itemVariants}
        onClick={() => {
          setOpen(false);
          setLang(false);
        }}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-primary-yellow text-slate-700 hover:text-white transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}></motion.span>
        <span>العربية</span>
      </motion.li>
    </>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
