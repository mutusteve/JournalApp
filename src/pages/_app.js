import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes'; // For dark/light mode support
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}