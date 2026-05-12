import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatCurrency } from './helpers';

export const exportToPDF = (data, title, columns, fileName = null) => {
  try {
    const doc = new jsPDF('landscape');
    
    // Header
    doc.setFillColor(0, 37, 221);
    doc.rect(0, 0, doc.internal.pageSize.width, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Enfuna Uganda', 14, 22);
    doc.setFontSize(12);
    doc.text('Rider Management System', 14, 32);
    
    // Title
    doc.setTextColor(0, 37, 221);
    doc.setFontSize(16);
    doc.text(title, 14, 55);
    
    // Date
    doc.setTextColor(100);
    doc.setFontSize(9);
    doc.text(`Generated: ${new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' })}`, 14, 63);
    
    // Table
    autoTable(doc, {
      startY: 70,
      head: [columns.map(c => c.header)],
      body: data.map(item => columns.map(c => item[c.key] || 'N/A')),
      theme: 'striped',
      headStyles: { 
        fillColor: [0, 37, 221],
        fontSize: 9,
        fontStyle: 'bold',
        halign: 'left'
      },
      bodyStyles: {
        fontSize: 8,
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      margin: { top: 10 }
    });
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(`Page ${i} of ${pageCount} | Enfuna Uganda Admin Dashboard`, 
        doc.internal.pageSize.width - 100, 
        doc.internal.pageSize.height - 10
      );
    }
    
    const finalFileName = fileName || `enfuna-${title.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(finalFileName);
    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    return false;
  }
};