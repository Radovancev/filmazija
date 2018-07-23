<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
                version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Site map | Filmazija - ICToteka online movies </title>
                <link rel="stylesheet" type="text/css" href="style2.css"/>
            </head>
            <body>
                
                <div>
                    <table id="formicaxsl">
                        <thead>
                            <tr>
                                <td>URL</td>
                                <td>Change frequency</td>
                                <td>Priority</td>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sm:urlset/sm:url">
                                <tr>
                                    <td>
                                        <xsl:value-of select="sm:loc"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="sm:changefreq"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="sm:priority"/>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
                
                <script
          src="https://code.jquery.com/jquery-2.2.4.min.js"
          integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
          crossorigin="anonymous"></script>
                <script src="javasXSL.js"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
