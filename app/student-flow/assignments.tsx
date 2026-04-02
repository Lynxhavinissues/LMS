import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AllAssignmentsScreen() {
  const router = useRouter();

  const assignments = [
    {
      id: '1',
      status: 'Submitted',
      submittedDate: 'Jan 18, 12:06 PM',
      title: 'Implement PDF-based Q&A using Vector Database',
      course: 'AM101 - AI / ML Frontier Ai Engineer',
      description: 'Extract content from PDFs. store embeddings. and answer us...',
      mark: '75%',
    },
    {
      id: '2',
      status: 'In Progress',
      dueDate: 'Jan 26, 11:59 PM',
      title: 'Build Q&A System using RAG',
      course: 'AM101 - AI / ML Frontier Ai Engineer',
      description: 'Building a Question-Answering (Q&A) system using Retrieval-...',
    },
    {
      id: '3',
      status: 'In Progress',
      dueDate: 'Jan 26, 11:59 PM',
      title: 'Build Q&A System using RAG',
      course: 'SS102 - System ....',
      description: 'Building a Question-Answering (Q&A) system using Retrieval-...',
    },
    {
      id: '4',
      status: 'In Progress',
      dueDate: 'Jan 26, 11:59 PM',
      title: 'Build Q&A System using RAG',
      course: 'SS102 - System ....',
      description: 'Building a Question-Answering (Q&A) system using Retrieval-...',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FDFDFD]">
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Feather name="arrow-left" size={20} color="#4B5563" />
          </TouchableOpacity>
          <Text className="text-[18px] font-medium text-gray-800">All Assignments</Text>
        </View>
        <TouchableOpacity className="flex-row items-center border border-gray-100 px-3 py-1.5 rounded-lg bg-white shadow-sm">
          <Feather name="sliders" size={14} color="#4B5563" />
          <Text className="text-[13px] text-gray-600 ml-1.5 font-medium">Status</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 pt-2">
        {assignments.map((assignment) => (
          <View key={assignment.id} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100/50 mb-4">
            {assignment.status === 'Submitted' ? (
              <View className="bg-[#DCFCE7]/50 self-start px-3 py-1 rounded-full mb-3">
                <Text className="text-[#16A34A] text-[11px] font-medium">
                  Submitted on {assignment.submittedDate}
                </Text>
              </View>
            ) : (
              <View className="bg-[#FFF3EC]/50 self-start px-3 py-1 rounded-full mb-3">
                <Text className="text-[#ea580c] text-[11px] font-medium">
                  {assignment.status}
                </Text>
              </View>
            )}

            <Text className="text-[16px] font-semibold text-gray-800 leading-snug">
              {assignment.title}
            </Text>
            <Text className="text-[13px] text-gray-500 mt-1">
              {assignment.course}
            </Text>
            
            <Text className="text-[13px] text-gray-400 mt-3 leading-relaxed">
              {assignment.description}
            </Text>

            <View className="flex-row items-center justify-between mt-5">
              {assignment.status === 'Submitted' ? (
                <Text className="text-[#ea580c] text-[14px] font-medium">
                  Mark :{assignment.mark}
                </Text>
              ) : (
                <View className="flex-row items-center">
                  <Feather name="file-text" size={14} color="#9CA3AF" />
                  <Text className="text-[13px] text-gray-500 ml-1.5 font-medium">
                    Due {assignment.dueDate}
                  </Text>
                </View>
              )}

              {assignment.status === 'Submitted' ? (
                <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-[10px]">
                  <Text className="text-gray-500 text-[13px] font-medium">View Submission</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity 
                  onPress={() => router.push('/student-flow/assignment-details')}
                  className="bg-[#ea580c] px-4 py-2 rounded-[10px] shadow-sm"
                >
                  <Text className="text-white text-[13px] font-medium">View Assignment</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}
