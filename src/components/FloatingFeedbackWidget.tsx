import React, { useState } from 'react';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

interface FloatingFeedbackWidgetProps {
  template: string;
  theme: string;
  id: string;
  color?: string;
}

const FloatingFeedbackWidget = ({ template, theme, id, color = 'amber' }: FloatingFeedbackWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 rounded-full shadow-lg bg-${color}-500 hover:bg-${color}-600 text-white p-4 z-50`}
      >
        <MessageSquare className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] p-0">
          <iframe
            src={`/feedback/preview?template=${template}&theme=${theme}&id=${id}`}
            className="w-full h-[600px] border-none rounded-lg"
            title="Feedback Widget Preview"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingFeedbackWidget;