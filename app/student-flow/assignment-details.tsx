import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';

type UploadedFile = {
  id: string;
  name: string;
  size: string;
  status: 'Uploading...' | 'Ready to submit';
  progress: number;
};

export default function AssignmentDetailsScreen() {
  const router = useRouter();
  const [files, setFiles] = useState<UploadedFile[]>([
    {
      id: 'initial_1',
      name: 'Project_Guidelines.pdf',
      size: '2.4MB',
      status: 'Ready to submit',
      progress: 100,
    }
  ]);

  const formatBytes = (bytes: number, decimals = 1) => {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${sizes[i]}`;
  };
   
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const pickedFile = result.assets[0];
        const newFileId = Math.random().toString(36).substring(7);
        const newFile: UploadedFile = {
          id: newFileId,
          name: pickedFile.name,
          size: pickedFile.size ? formatBytes(pickedFile.size) : 'Unknown size',
          status: 'Uploading...',
          progress: 0,
        };

        setFiles((prev) => [...prev, newFile]);

        let currentProgress = 0;
        const intervalId = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 20) + 10;
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(intervalId);
            setFiles((prev) =>
              prev.map((f) =>
                f.id === newFileId ? { ...f, progress: 100, status: 'Ready to submit' } : f
              )
            );
          } else {
            setFiles((prev) =>
              prev.map((f) => (f.id === newFileId ? { ...f, progress: currentProgress } : f))
            );
          }
        }, 500);
      }
    } catch (err) {
      console.error('Error picking document', err);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FDFDFD]">

      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity onPress={() => router.back()} className="mr-3 p-1">
            <Feather name="chevron-left" size={24} color="#4B5563" />
          </TouchableOpacity>
          <View>
            <Text className="text-[20px] font-medium text-gray-800">Assignments</Text>
            <Text className="text-[12px] text-gray-500 mt-0.5">Track your coursework and upcoming deadlines.</Text>
          </View>
        </View>
        
        <View className="flex-row items-center ml-2">
          <TouchableOpacity className="w-9 h-9 border border-gray-200 rounded-xl items-center justify-center bg-white shadow-sm mr-2">
            <Feather name="search" size={16} color="#4B5563" />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 border border-gray-200 rounded-xl items-center justify-center bg-white shadow-sm mr-3">
            <Feather name="bell" size={16} color="#4B5563" />
          </TouchableOpacity>
          <Image
            className="w-9 h-9 rounded-full"
            source={{ uri: 'https://i.pravatar.cc/100?img=11' }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-5 pt-2">

        <View className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100/50 mb-6">
          <View className="bg-[#FFF3EC]/80 self-start px-3 py-1.5 rounded-full mb-4">
            <Text className="text-[#ea580c] text-[11px] font-medium">In Progress</Text>
          </View>
          <Text className="text-[20px] font-semibold text-gray-800 leading-snug mb-3">
            Build Q&A System using RAG
          </Text>
          <View className="flex-row items-center mb-3">
            <Feather name="file-text" size={14} color="#9CA3AF" />
            <Text className="text-[13px] text-gray-500 ml-1.5 font-medium">
              Due Jan 26 , 11:59 PM
            </Text>
          </View>
          <Text className="text-[13px] text-gray-500 leading-relaxed">
            Building a Question-Answering (Q&A) system using R..
          </Text>
        </View>

        <Text className="text-[18px] font-medium text-gray-800 mb-4 px-1">
          Submit Assignment
        </Text>


        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={pickDocument}
          className="border-2 border-dashed border-gray-400 rounded-[20px] p-8 items-center justify-center bg-transparent mb-6"
        >
          <View className="w-14 h-14 bg-[#ea580c] rounded-full items-center justify-center mb-4 shadow-sm">
            <Feather name="upload-cloud" size={24} color="white" />
          </View>
          <Text className="text-[16px] font-medium text-gray-800 mb-2">Upload your files</Text>
          <Text className="text-[13px] text-gray-500 mb-1 text-center">
            Drag and drop files here or click to select files
          </Text>
          <Text className="text-[12px] text-gray-400 text-center mt-2 leading-relaxed">
            Supported fomats: pdf, doc, docx, txt.{'\n'}Maximum file size: 10MB
          </Text>
        </TouchableOpacity>


        {files.length > 0 && (
          <View className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100/50 mb-28">
            {files.map((file, index) => (
              <View 
                key={file.id} 
                className={`flex-row ${file.status === 'Uploading...' ? 'items-start' : 'items-center'} justify-between ${index !== files.length - 1 ? 'mb-6' : ''}`}
              >
                <View className="flex-row items-center flex-1">
                  <View className="w-14 h-14 bg-[#FEE2E2] rounded-[16px] items-center justify-center mr-4">
                    <Text className="text-white bg-[#DC2626] text-[10px] font-bold px-[6px] py-[2px] rounded-[4px]">
                      {file.name.split('.').pop()?.toUpperCase() || 'FILE'}
                    </Text>
                  </View>
                  <View className={`flex-1 ${file.status === 'Uploading...' ? 'mt-1' : ''}`}>
                    <Text className="text-[15px] font-medium text-gray-800 mb-1" numberOfLines={1}>{file.name}</Text>
                    
                    {file.status === 'Uploading...' ? (
                      <>
                        <View className="flex-row items-center mb-3">
                          <Text className="text-[13px] text-gray-400 mr-3">{file.size}</Text>
                          <Text className="text-[13px] text-gray-500 font-medium">{file.status}</Text>
                        </View>
                        <View className="w-[90%] bg-gray-100 h-1.5 rounded-full overflow-hidden">
                          <View className="bg-[#ea580c] h-full rounded-full" style={{ width: `${file.progress}%` }} />
                        </View>
                      </>
                    ) : (
                      <View className="flex-row items-center mt-1">
                        <Text className="text-[13px] text-gray-400 mr-3">{file.size}</Text>
                        <Text className="text-[13px] text-[#22c55e] font-medium">{file.status}</Text>
                      </View>
                    )}
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeFile(file.id)} className={`p-2 ${file.status === 'Uploading...' ? 'mt-2' : ''}`}>
                  <Feather name={file.status === 'Uploading...' ? 'x' : 'trash-2'} size={16} color="#4B5563" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

      </ScrollView>


      <View className="absolute bottom-0 left-0 right-0 p-5 bg-[#FDFDFD] border-t border-gray-100">
        <TouchableOpacity className="bg-[#ea580c] w-full py-4 rounded-[14px] items-center shadow-sm">
          <Text className="text-white text-[15px] font-semibold">Submit Assignment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
