package tinotendachingwena.website.services.sitemap;

import org.springframework.stereotype.Service;
import tinotendachingwena.website.models.sitemap.XmlUrl;
import tinotendachingwena.website.models.sitemap.XmlUrlSet;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Service
public class SitemapService {

    public XmlUrlSet generateSiteMap(){

        String rootFolderPrefixEn = "/frontend/src/app/en/";
        String rootFolderPrefixSn = "/frontend/src/app/sn/";
        XmlUrlSet xmlUrlSet = new XmlUrlSet();

        XmlUrl xmlUrlHome = new XmlUrl("https://www.tinotendachingwena.com/", findLastMod(rootFolderPrefixEn + "page.js"), "1.00");
        XmlUrl xmlUrlHome1= new XmlUrl("https://www.tinotendachingwena.com/en/", findLastMod(rootFolderPrefixEn + "page.js"), "1.00");
        XmlUrl xmlUrlExperiences = new XmlUrl("https://www.tinotendachingwena.com/en/experiences", findLastMod(rootFolderPrefixEn + "experiences/page.js"), "0.80");
        XmlUrl xmlUrlContact = new XmlUrl("https://www.tinotendachingwena.com/en/contact", findLastMod(rootFolderPrefixEn + "contact/page.js"), "0.80");

        XmlUrl xmlUrlHomeSn = new XmlUrl("https://www.tinotendachingwena.com/sn/", findLastMod(rootFolderPrefixSn + "page.js"), "0.80");
        XmlUrl xmlUrlExperiencesSn = new XmlUrl("https://www.tinotendachingwena.com/sn/experiences", findLastMod(rootFolderPrefixSn + "experiences/page.js"), "0.70");
        XmlUrl xmlUrlContactSn = new XmlUrl("https://www.tinotendachingwena.com/sn/contact", findLastMod(rootFolderPrefixSn + "experiences/page.js"), "0.70");

        xmlUrlSet.addUrl(xmlUrlHome);
        xmlUrlSet.addUrl(xmlUrlHome1);
        xmlUrlSet.addUrl(xmlUrlExperiences);
        xmlUrlSet.addUrl(xmlUrlContact);

        xmlUrlSet.addUrl(xmlUrlHomeSn);
        xmlUrlSet.addUrl(xmlUrlExperiencesSn);
        xmlUrlSet.addUrl(xmlUrlContactSn);

        return xmlUrlSet;
    }

    private String findLastMod(String fileName){
        String rootPath = System.getProperty("user.dir").split("/backend")[0];

        File file = new File(rootPath + fileName);
        if (file.exists()){
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return dateFormat.format(file.lastModified());
        }

        return "";
    }
}
