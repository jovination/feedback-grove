
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Code } from "lucide-react";

interface TemplateFeaturesSidebarProps {
  onShowDocs: () => void;
}

const TemplateFeaturesSidebar = ({ onShowDocs }: TemplateFeaturesSidebarProps) => {
  return (
    <>
      <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
        <CardHeader className="pb-2 border-b border-zinc-100">
          <CardTitle className="text-sm font-medium">Template Features</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Feature</TableHead>
                <TableHead className="text-xs">Availability</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs flex items-center gap-2">
                  <Palette size={14} /> Theming
                </TableCell>
                <TableCell className="text-xs">All templates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs flex items-center gap-2">
                  <Layout size={14} /> Responsive
                </TableCell>
                <TableCell className="text-xs">All templates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs flex items-center gap-2">
                  <Code size={14} /> Custom CSS
                </TableCell>
                <TableCell className="text-xs">Premium only</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="shadow-sm border border-zinc-200 rounded-lg">
        <CardHeader className="pb-2 border-b border-zinc-100">
          <CardTitle className="text-sm font-medium">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-sm">
          <p className="text-zinc-600 mb-4">
            Having trouble with your widget? Check our documentation for detailed integration guides.
          </p>
          <Button variant="outline" className="w-full text-sm" size="sm" onClick={onShowDocs}>
            View Documentation
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TemplateFeaturesSidebar;
