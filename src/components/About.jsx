import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-100">

      {/* כותרת ראשית עם אנימציה */}
      <motion.h1
        className="display-4 fw-bold text-dark"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🍽 Welcome to Kitchen Magic
      </motion.h1>

      {/* תיאור החנות */}
      <motion.p
        className="lead text-muted w-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        **Your dream kitchen starts here!** At Kitchen Magic, we bring you top-quality tools that make cooking easier, more efficient, and a whole lot more fun.
        We believe in **style, durability, and functionality**, all combined to bring the best kitchen experience right to your home.
      </motion.p>

      {/* אזור המידע עם אפקטי כניסה */}
      <div className="w-75 mt-4 text-start">
        <motion.h3
          className="fw-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          ✨ Who We Are
        </motion.h3>
        <p>
          We are passionate about **helping home cooks and professional chefs alike** achieve the best results in their kitchens.
          Our mission is to provide products that **combine elegance with practicality**, ensuring that every meal you make is a masterpiece.
        </p>

        <motion.h3
          className="fw-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          🥘 What We Offer
        </motion.h3>
        <p>
          - **High-end cookware** for precision cooking
          - **Chef-grade knives** for effortless slicing
          - **Smart gadgets** that make cooking easier
          - **Stylish accessories** that fit any modern kitchen
        </p>

        <motion.h3
          className="fw-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          💖 Why Choose Us?
        </motion.h3>
        <ul>
          <li>✔️ **Premium quality that lasts**</li>
          <li>✔️ **Fast & secure shipping**</li>
          <li>✔️ **Modern and stylish designs**</li>
          <li>✔️ **Customer support that cares**</li>
        </ul>
      </div>

      {/* אנימציית חתימה עם אפקט קפיצה */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <p className="text-muted">Created with ❤️ by <strong>Rivky & Esti</strong></p>
      </motion.div>

    </div>
  );
};

export default About;
