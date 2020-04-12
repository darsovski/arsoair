package com.wp2020.project.Service;

import com.itextpdf.text.pdf.PdfPTable;
import com.wp2020.project.Model.Reservation;

public interface PrfService {

    public PdfPTable generatePdfTable(Reservation reservation);
    public void generateItenerary(Reservation reservation,String pdfTickets);
}
