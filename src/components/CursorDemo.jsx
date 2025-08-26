import { motion } from 'framer-motion';

const CursorDemo = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white">
      <h3 className="text-sm font-mono mb-3 text-green-400">Cursor Types</h3>
      <div className="space-y-2 text-xs">
        <div className="cursor-demo-item" data-cursor="button">🖱️ Button</div>
        <div className="cursor-demo-item" data-cursor="link">🔗 Link</div>
        <div className="cursor-demo-item" data-cursor="text">📝 Text</div>
        <div className="cursor-demo-item" data-cursor="code">💻 Code</div>
        <div className="cursor-demo-item" data-cursor="terminal">🖥️ Terminal</div>
        <div className="cursor-demo-item" data-cursor="git">📚 Git</div>
        <div className="cursor-demo-item" data-cursor="database">🗄️ Database</div>
        <div className="cursor-demo-item" data-cursor="api">🔌 API</div>
      </div>
    </div>
  );
};

export default CursorDemo;
